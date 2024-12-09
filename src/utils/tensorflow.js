const tf = require('@tensorflow/tfjs-node');
const dotenv = require('dotenv');

dotenv.config();
/**
 * @type {tf.GraphModel}
 */
let model;

const MODEL_URL = process.env.MODEL_URL;

const loadModel = async () => {
	if (!model) {
		console.log('Loading TensorFlow model...');
		model = await tf.loadGraphModel(MODEL_URL); // Ganti dengan path model Anda
		console.log('Model loaded successfully.');
	}
	return model;
};
module.exports = { loadModel, getModel: () => model };
