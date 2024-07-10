const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define routes
const routes = require('./routes/index');
app.use('/', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
