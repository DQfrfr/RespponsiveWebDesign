fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random'))
  .then(response => response.json())
  .then(data => {
    const parsed = JSON.parse(data.contents); // THIS is important!
    const quote = parsed[0]?.q;
    const author = parsed[0]?.a;

    if (quote && author) {
      document.getElementById("quote-display").innerHTML = `
        <blockquote>
          <p>"${quote}"</p>
          <footer>— ${author}</footer>
        </blockquote>
      `;
    } else {
      document.getElementById("quote-display").innerHTML = "Failed to load quote.";
    }
  })
  .catch(error => {
    console.error('Quote fetch error:', error);
    document.getElementById("quote-display").innerHTML = "Error fetching quote.";
  });
