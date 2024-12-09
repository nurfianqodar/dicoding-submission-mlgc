const express = require('express');
const dotenv = require('dotenv');
const { predictRouter } = require('./routers/predictRouters.cjs');
const { loadModel, model } = require('./utils/tensorflow');
// Load env
dotenv.config();

// Get port environment variable
const APP_PORT = process.env['APP_PORT'];

// Initialize app
const app = express();

// Router
app.use('/predict', predictRouter);

// Run app
app.listen(APP_PORT, async () => {
	// Loading model ml
	await loadModel();
	console.log(`app running at port ${APP_PORT}`);
});
