const tf = require('@tensorflow/tfjs-node');

let model;

const loadModel = async () => {
	const mode = await tf.loadLayersModel(
		'https://storage.googleapis.com/submissionmlgc-nurfianqodar-bucket/models/model.json',
	);
};

module.exports = {
	model,
	loadModel,
};
