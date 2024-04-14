const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/scss', express.static(__dirname + '/scss'));
app.use('/public', express.static(__dirname + '/public'));

// Route for the index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for page1
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','about.html'));
});

// Route for page2
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','blog.html'));
});

app.get('/class', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','class.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','contact.html'));
});
app.get('/detail', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','detail.html'));
});

app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','team.html'));
});
app.get('/testimonial', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','testimonial.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
