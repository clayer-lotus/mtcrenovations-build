const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist/mtcrenovations')));

// Catch all other routes and return the 'index.html' file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/mtcrenovations/index.html'));
});

// Start the Express server
const port = process.env.PORT || 3300;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
