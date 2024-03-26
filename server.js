const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // 'public' should be the directory where your HTML, CSS, JS and images reside

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});