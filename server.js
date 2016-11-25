const express = require('express');

// Create our app
const app = express();

app.use(express.static('public'));

app.listen(4000, function () {
  console.log('Server running on port 4000');
});
