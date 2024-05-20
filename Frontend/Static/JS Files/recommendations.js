document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('recommendation-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the selected genres from the form
    const selectedGenres = Array.from(form.elements['genres'].selectedOptions).map(option => option.value);

    // Make an AJAX request to the Flask route
    fetch('/recommendations.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'genres': selectedGenres.join(','),
      }),
    })
    .then(response => response.json())
    .then(data => {
      // Convert JSON data to string
      const jsonData = JSON.stringify(data);
      
      // Create a Blob with the JSON data
      const blob = new Blob([jsonData], { type: 'application/json' });

      // Create a URL for the Blob
      const blobURL = URL.createObjectURL(blob);
      
      // Create a temporary anchor element
      const downloadLink = document.createElement('a');
      downloadLink.href = blobURL;
      downloadLink.download = 'recommendations.json';
      
      // Append the anchor element to the document body and simulate a click
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Clean up by revoking the Object URL and removing the anchor element
      URL.revokeObjectURL(blobURL);
      document.body.removeChild(downloadLink);
    })
    .catch(error => console.error('Error:', error));
  });
});
