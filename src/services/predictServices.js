const tf = require('@tensorflow/tfjs-node');
const { getModel } = require('../utils/tensorflow');
const { ResponseSuccess } = require('../utils/response');
const { PredictionResult } = require('../models/predictionModel');
const { Jimp } = require('jimp');
const { gcFirestore } = require('../utils/gcloud');
/**
 *
 * @param {Buffer} imageBuffer
 * @param {string} mime
 * @returns
 */

const predictionsColls = gcFirestore.collection('predictions');

const predictService = async (imageBuffer, mime) => {
	try {
		model = getModel();

		// Preprocessing image
		const image = await Jimp.read(imageBuffer);
		const imageResized = image.resize({ w: 224, h: 224 }); // Fixed resize usage
		const resizedBuffer = await imageResized.getBuffer(mime);

		// Convert image to tensor
		const imageTensor = tf.node
			.decodeImage(resizedBuffer, 3) // Decode image for Node.js
			.toFloat()
			.div(tf.scalar(255));
		const imageBatched = imageTensor.expandDims(0);

		// Prediction
		const prediction = model.predict(imageBatched);
		const output = prediction.arraySync();

		// Dispose tensors to avoid memory leaks
		imageTensor.dispose();
		imageBatched.dispose();
		prediction.dispose();

		// Interpretation prediction result
		const predValue = output[0][0];
		console.log(predValue);
		const interpreted = { ...new PredictionResult(predValue) };

		// Save to firestore
		const docRef = predictionsColls.doc(interpreted.id);
		await docRef.set(interpreted);

		return new ResponseSuccess(
			'Model is predicted successfully',
			interpreted,
		);
	} catch (e) {
		console.error(e);
		throw e;
	}
};

module.exports = {
	predictService,
};
