document.addEventListener("DOMContentLoaded", function() {
    var emailOrPhoneField = document.getElementById("emailOrphone");
    
    // Validate whether the input is a valid email or phone number on form submission
    document.getElementById("loginform").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        var emailOrPhoneValue = emailOrPhoneField.value.trim(); // Trim to remove leading/trailing spaces
        
        // Validate email or phone number
        if (!isValidEmail(emailOrPhoneValue) && !isValidPhoneNumber(emailOrPhoneValue)) {
            alert("Please enter a valid email or phone number.");
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
});
