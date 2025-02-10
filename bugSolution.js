const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate userId.  This is a placeholder - adapt to your validation needs.
  if (isNaN(parseInt(userId)) || userId <= 0){
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// ... other routes

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});