document.addEventListener("DOMContentLoaded", function() {
    var emailOrPhoneField = document.getElementById("emailOrPhone");
    var passwordField = document.getElementById("password");
    var showPasswordCheckbox = document.getElementById("showPassword");

    // Toggle password visibility
    showPasswordCheckbox.addEventListener('change', function() {
        if (this.checked) {
            passwordField.type = 'text';
        } else {
            passwordField.type = 'password';
        }
    });

    // Validate whether the input is a valid email or phone number on form submission
    document.getElementById("signupform").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        var emailOrPhoneValue = emailOrPhoneField.value.trim(); // Trim to remove leading/trailing spaces
        var passwordValue = passwordField.value.trim(); // Trim to remove leading/trailing spaces
        
        // Validate email or phone number
        if (!isValidEmail(emailOrPhoneValue) && !isValidPhoneNumber(emailOrPhoneValue)) {
            alert("Please enter a valid email or phone number.");
            return; // Exit the function early to prevent further execution
        }
        
        // Validate password
        if (!isValidPassword(passwordValue)) {
            alert("Password must be at least 12 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return; // Exit the function early to prevent further execution
        }
        
        // If all validations pass, redirect to index.html
        window.location.href = 'index.html';
    });
    
    // Function to validate email format
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Function to validate phone number format
    function isValidPhoneNumber(phoneNumber) {
        var phoneRegex = /^\d{10}$/; // This regex assumes a 10-digit phone number. Adjust as needed.
        return phoneRegex.test(phoneNumber);
    }
    
    // Function to validate password format
    function isValidPassword(password) {
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
        return passwordRegex.test(password);
    }
});
