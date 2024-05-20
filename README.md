# Movie-Recommendation-Website-using-LightGCN-approach
In recent years, the use of machine learning in marketing has increased dramatically, bringing significant business benefits. Ultimately, it has become a significant factor in a business's success and development in terms of income and growth, as it assists in suggesting the right service to the appropriate people or groups. Graph Neural Networks are now widely employed, notably in Recommender Systems, enhancing their efficiency. In this project, we aim to implement a Graph Neural Network and a machine learning model called LightGCN, which uses user-item interaction graphs as input, representing movies as nodes and user ratings as edges. This unique approach enables the model to learn user and item embeddings through linear propagation on the graph, capturing detailed relationships for precise recommendations. Collaborative filtering recommends movies based on user data and similar user preferences. For the website front, the project will utilize HTML, CSS, and JavaScript as the front-end, while Flask will serve as the back-end, facilitating communication with the machine learning models. The main focus of the proposed methodology lies in implementing and comparing LightGCN and another collaborative filtering approach, evaluating their performance using precision and recall metrics, recommending top movies to users, and developing an interactive website for personalized recommendations. Here we are employing publicly available movie datasets for training and evaluation and constructing a functional and user-friendly recommendation website.
Implemented movie recommendation using LightGCN. Evaluated against 5 CF methods called (Matrix Factorization (MF), Neural Graph Collaborative Filtering (NGCF) , Cosine Similarity, Singular Value Decomposition (SVD), Hybrid Recommendation System, emphasizing precision and recall. Created interactive website with HTML, CSS, JS, Flask for personalized recommendations, enhancing UX. Achieved 96% accuracy.

# Introduction
In the ever-evolving technology domain of today, Recommender Systems play a crucial role by providing personalized suggestions to users based on their preferences and behaviour. These advanced algorithms encompass various techniques such as content-based filtering, collaborative filtering, and hybrid models, enabling tailored recommendations across diverse platforms.
A recommendation system is a type of software application or algorithm designed to provide personalized items, products, or content that users might find interesting, relevant, or useful based on their preferences and behavior.
Whether it's e-commerce, Health Care, Education, streaming services, or social media, recommender systems contribute significantly to enhancing user experiences, increasing engagement, and driving business success in the real world.
LightGCN (Light Graph Convolutional Network), leverages graph convolutional networks to capture intricate patterns in user behavior and deliver accurate, personalized movie suggestions while maintaining simplicity and competitive performance, while delivering accurate and personalized recommendations.
Collaborative Filtering is a personalized recommendation approach that provides effective personalization based on user- item interactions, offering valuable insights into user preferences and behavior.

# Frontend
In frontent we have 2 folders here consisting of Templates folder where html files are present and Static folder where css_files and jss_files are present for the website front.
# Templates
1. home.html - It is the introduction page of the Website. Provide buttons for SignUp and Login.
2. index.html - Contains all the pages data.
3. SignUp.html - It is used to create a account for the new user with neccesary validations required.
4. login.html - It is used by the registered user to use in the website.
5. movie_details.html - Contains all details about all the movies in the dataset as movie cards and can be filtered using the Tag, Ratings, Year of the movie data.
6. recommendions.html - Gives to the Movie recommendations to the user by the user prefernce of selecting Multiple Genre.
7. top_rated_movies.html - Gives Top 10 recommended movies from the whole Dataset randomly.
8. user_profile.html - Ask the User to enter the his/her prefernces and saves them.
These web pages also contains the required css and js files in the repositary.

# Proposed-Methodology-LightGCN
The proposed method in this project is LightGCN, or Light Graph Convolutional Network, is an innovative recommendation algorithm designed to provide accurate and personalized recommendations in various domains, particularly in collaborative filtering tasks. It leverages graph neural networks (GNNs) to analyze and model user-item interaction data, capturing latent relationships between users and items within a recommendation graph.
Process:
1. Data Processing
2. LightGCN Implementation
3. Evaluation with other 5 Collaborative filtering Models
   (MF, NGCF, Cosine similarity, SVD, Hybrid Recommendation systems)
5. Website Development
6. Integration
# Layers in LightGCN:
**a) Input Layer (Graph Representation):**
1. Users and items are represented as nodes in the graph & Interactions between users and items are represented as edges in the graph.
2. Each edge carries information about the interaction type or strength (e.g., ratings, genre, etc).
3. The graph can be directed or undirected depending on the nature of the interactions.

**b) Embedded Layer:**
1. Node embeddings are initialized for both users and items.
2. Each node (user or item) is associated with an initial embedding vector, These embeddings serve as the starting point for information propagation.
   
**c) Propagation Layer:**
1. Graph convolutional layers propagate information across the graph.
2. Information from neighboring nodes is aggregated to update node embeddings.
3. LightGCN performs this aggregation without feature transformations or nonlinear activations, making the process efficient,

**d) Prediction Layer:**
1. The final layer aggregates embeddings from the last convolutional layer.
2. Predictions for user-item interactions are generated based on these aggregated embeddings.
3. Common methods include computing the dot product or cosine similarity between user and item embeddings.

# The-Algorithmns-compared-with-LightGCN-algorithm
Algorithms Used For Comparison With LightGCN;
a) Hybrid Recommendation Systems:
b) Cosine Similarity Based Recommendation Systems
c) Neural Graph Collaborative Filtering Recommendation System (NGCF)
d) Matrix Factorisation (MF)
e) Singular Vector Decomposition (SVD)

**a) Drawbacks Of Hybrid Recommendation Systems:**

1. Simplicity and Efficiency: LightGCN is to implement and computationally more officient compared to Hybrid Recommendations, which often involve combining multiple models or techniques
2. Cold-start Problem Handling: LightGCN is adept at handling the cold-start problem by relying solely on user-item interaction data, making it more suitable for scenarios where there's limited or no historical data available for new items or users.

**b) Drawbacks Of Cosine Similarity Based Recommendation Systems:**
1. Implicit Feedback Handling: It's great at understanding scenarios where users don't explicitly rate items. This means it can pick up on subtle relationships between users and items better than methods like cosine similarity.
2. Embedding Learning: LightGCN learns compact, rich representations of users and items, Unlike cosine similarity, which just looks at basic features, LightGCN digs deeper, capturing complex relationships in the data. This leads to more accurate recommendations

**c) Drawbacks Of Neural Graph Collaborative Filtering:**
1. Complexity: Neural Graph Collaborative Filtering (NGCF) can be more complex to implement and fine-tune compared to LightGCN, which may require more expertise and computational resources.
2. Interpretability: NGCF's intricate neural network architecture may lack interpretability compared to LightGCN. making it harder to understand how are generated.

**d) Drawbacks Of Matrix Factorisation:**
1. Scalability: LightGCN handles large-scale datasets more efficiently. It can process massive amounts of data quickly, making it suitable for real-world recommendation systems with millions of users and items,
2. Cold-start Problem; LightGCN tackles the issue of making recommendations for new users or items with limited data, It can use additional information, like user or item characteristics, to provide meaningful recommendations even when interaction data is sparse.

**e) Drawbacks Of Singular Vector Decomposition:**
1. Cold Start Problem: SVD struggles with new users or items without enough interaction data, limiting its effectiveness in recommending to them. LightGCN handles this better by not relying. solely on historical interactions,
2. Scalability: SVD's computational demands grow quickly with dataset size, making it inefficient for large-scale recommendation tasks. LightGCN is more scalable and efficient due to its simpler operations and lower computational requirements

# Dataset-ML-Latest-Small
This dataset (ml-latest-small) describes 5-star rating and free-text tagging activity from [MovieLens](http://movielens.org), a movie recommendation service. It contains 100836 ratings and 3683 tag applications across 9742 movies. These data were created by 610 users between March 29, 1996 and September 24, 2018. This dataset was generated on September 26, 2018.
Users were selected at random for inclusion. All selected users had rated at least 20 movies. No demographic information is included. Each user is represented by an id, and no other information is provided.
This and other GroupLens data sets are publicly available for download at <http://grouplens.org/datasets/>, making it a valuable resource for evaluating recommendation system methods.
DATASET LINK: https://files.grouplens.org/datasets/movielens/ml-latest-small.zip

The data are contained in the files are: "'links.csv', 'movies.csv', 'ratings.csv' and 'tags.csv" ".
Certainly! Here's a brief summary of each file in the MovieLens dataset:
1. **movies.csv:**
   - Contains movie information.
   - Each line represents one movie and includes movie ID, title, and genres.
   - Genres are listed in a pipe-separated format, and titles include the year of release in parentheses.  
2. **tags.csv:**
   - Contains user-generated tags for movies.
   - Each line represents one tag applied to one movie by one user.
   - Tags are typically single words or short phrases describing the movie.
   
3. **links.csv:**
   - Provides identifiers to link to other sources of movie data.
   - Each line represents one movie and includes movie ID, IMDb ID, and TMDb ID.
   - IMDb and TMDb IDs are identifiers for movies used by IMDb and TMDb websites, respectively.

4. **ratings.csv:**
   - Contains user ratings for movies.
   - Each line represents one rating of one movie by one user.
   - Ratings are made on a 5-star scale with half-star increments, and timestamps represent seconds since midnight Coordinated Universal Time (UTC) of January 1, 1970.

These files collectively provide comprehensive data for analyzing user interactions and movie characteristics within the MovieLens dataset.
