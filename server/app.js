const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Welcome to the Home Page');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
