const { predictService } = require('../services/predictServices');
const { BadRequestError, ContentTooLargeError } = require('../utils/error');

/**
 * Handle Image Prediction Request
 * @type {import("express").RequestHandler}
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const predictHandler = async (req, res) => {
	// Check is file exist
	if (!req.file) {
		console.error('file required');
		res.status(400);
		res.json(new BadRequestError());
		return;
	}

	// Check is file < 1 MB
	if (req.file.size > 1000000) {
		console.error('file too large');
		res.status(413);
		res.json(new ContentTooLargeError());
		return;
	}

	// Prediction
	try {
		const prediction = await predictService(
			req.file.buffer,
			req.file.mimetype,
		);
		res.json({ prediction });
	} catch (e) {
		res.status(400);
		res.json(new BadRequestError());
	}
};

/**
 * @type {import("express").RequestHandler}
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const historyHandler = async (req, res) => {};

module.exports = {
	predictHandler,
	historyHandler,
};
