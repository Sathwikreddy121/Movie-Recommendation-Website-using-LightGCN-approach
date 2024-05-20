from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email, Length, Regexp
from werkzeug.security import generate_password_hash, check_password_hash
import os
import secrets
from original_lightgcn import user_preferences, get_top_recommendations, lightgcn, movies_df, le_item, n_items, train_user_ids
import torch
import pandas as pd

app = Flask(__name__)
app.config['SECRET_KEY'] = secrets.token_hex(16)  # Generate a secret key
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'site.db')

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email_or_phone = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

class SignUpForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    phone = StringField('Phone Number', validators=[DataRequired(), Regexp(r'^\d{10}$', message="Phone number must be 10 digits.")])
    password = PasswordField('Password', validators=[DataRequired(), Length(min=12, message="Password must be at least 12 characters long.")])
    submit = SubmitField('Sign Up')

class LoginForm(FlaskForm):
    email_or_phone = StringField('Email or Phone Number', validators=[DataRequired(), Regexp(r'^[^\s@]+@[^\s@]+\.[^\s@]+$|^\d{10}$', message="Please enter a valid email or phone number.")])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Log In')

# Load the ratings.csv file
ratings_df = pd.read_csv('C:\\Users\\HP\\Documents\\Major_Project_Files\\frontend\\ml-latest-small\\ml-latest-small\\ratings.csv')

# Define the available genres
available_genres = [
    "Action", "Adventure", "Animation", "Children's", "Comedy", "Crime",
    "Documentary", "Drama", "Fantasy", "Film-Noir", "Horror", "Musical",
    "Mystery", "Romance", "Sci-Fi", "Thriller", "War", "Western"
]

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/index.html')
def index():
    return render_template('index.html')

@app.route('/signUp.html', methods=['GET','POST'])
def sign_up():
    form = SignUpForm()
    if form.validate_on_submit():
        email_or_phone = form.email.data or form.phone.data
        hashed_password = generate_password_hash(form.password.data, method='sha256')
        new_user = User(email_or_phone=email_or_phone, password=hashed_password)
        try:
            db.session.add(new_user)
            db.session.commit()
            flash('Signed up successfully.')
            return redirect(url_for('index'))
        except Exception as e:
            flash(f"Error: {e}")
            db.session.rollback()
    return render_template('signUp.html', form=form)

@app.route('/logIn.html', methods=['GET', 'POST'])
def log_in():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email_or_phone=form.email_or_phone.data).first()
        if user and check_password_hash(user.password, form.password.data):
            flash('Logged in successfully.')
            return redirect(url_for('index')) # Redirect to the index page or another appropriate page
        else:
            flash('Email or phone number not found or incorrect password.')
            return redirect(url_for('log_in'))
    return render_template('logIn.html', form=form)


@app.route('/recommendations.html', methods=['GET', 'POST'])
def recommendations():
    if request.method == 'POST':
        # Get user preferences from the form
        selected_genres = request.form.getlist('genres')

        # Generate random user ID
        random_user_id = torch.randint(0, len(train_user_ids), (1,)).item()

        # Get top recommendations based on user preferences
        top_recommendations = get_top_recommendations(random_user_id, selected_genres, lightgcn, movies_df, le_item, n_items)

        # Merge with ratings data to get average ratings
        recommended_ratings = pd.merge(top_recommendations, ratings_df, on='movieId', how='left')
        average_ratings = recommended_ratings.groupby(['movieId', 'title'], as_index=False)['rating'].mean()

        # Convert recommendations to JSON including only the title
        recommendations_json = average_ratings[['title']].to_json(orient='records')

        return recommendations_json
    elif request.method == 'GET':
        # Render the HTML template for the recommendations form
        return render_template('recommendations.html')


    
@app.route('/movie_details.html')
def movie_details():
    return render_template('movie_details.html')

@app.route('/top_rated_movies.html', methods=['GET', 'POST'])
def top_rated_movies():
    # Load movies dataset
    movies_df = pd.read_csv(r'C:\Users\HP\Documents\Major_Project_Files\project1\frontend\ml-latest-small\ml-latest-small\movies.csv')
    
    # Load ratings dataset
    ratings_df = pd.read_csv(r'C:\Users\HP\Documents\Major_Project_Files\project1\frontend\ml-latest-small\ml-latest-small\ratings.csv')

    # Merge datasets based on movieId
    movie_data = pd.merge(ratings_df, movies_df, on='movieId', how='inner')
    
    # Filter movies with rating 5
    top_rated_movies = movie_data[movie_data['rating'] == 5]
    
    # Calculate average ratings for each movie
    average_ratings = top_rated_movies.groupby('title')['rating'].mean()
    
    # Get top-rated movies
    top_movies = average_ratings.nlargest(16).reset_index()

    # Sort top-rated movies by year present in the title
    top_movies['year'] = top_movies['title'].str.extract(r'\((\d{4})\)$') # Extract year from title
    top_movies_sorted = top_movies.sort_values(by='year', ascending=False)

    return render_template('top_rated_movies.html', top_movies=top_movies_sorted.values.tolist())

@app.route('/user_profile.html', methods=['GET', 'POST'])
def user_profile():
    if request.method == 'POST':
        # Get form data
        username = request.form['username']
        email = request.form['email']
        preferences = request.form.getlist('preferences')
        ratings = request.form['ratings']
        watch_history = request.form.getlist('watch_history')

        # Redirect to a different page after form submission
        return redirect(url_for('user_profile_success', username=username))

    # Render the user profile form
    return render_template('user_profile.html', available_genres=available_genres)

@app.route('/recommend.html', methods=['GET'])
def recommend():
    # Get the JSON data from the URL parameter
    data = request.args.get('data')
    return render_template('recommend.html', data=data)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
