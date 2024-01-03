const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data
const suggestions = {
  'first_names_f': ['Aaliyah', 'Abbie', 'Abigail', 'Aimee', /* ... */],
  // Add other suggestion types as needed
};

// API endpoint to get a random suggestion
app.get('/getRandomSuggestion/:type', (req, res) => {
  const type = req.params.type;
  const suggestionsList = suggestions[type];

  if (!suggestionsList) {
    return res.status(404).json({ error: 'Invalid suggestion type' });
  }

  const randomIndex = Math.floor(Math.random() * suggestionsList.length);
  const randomSuggestion = suggestionsList[randomIndex];

  res.json({ suggestion: randomSuggestion });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});