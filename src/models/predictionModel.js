const { v4 } = require('uuid');
const uuid = v4;

// {
//     "status": "success",
//     "message": "Model is predicted successfully",
//     "data": {
//         "id": "77bd90fc-c126-4ceb-828d-f048dddff746",
//         "result": "Cancer",
//         "suggestion": "Segera periksa ke dokter!",
//         "createdAt": "2023-12-22T08:26:41.834Z"
//     }
//  }

class PredictionResult {
	/**
	 *
	 * @param {number} prob
	 */
	constructor(prob) {
		this.id = uuid();
		this.result = 'Cancer' ? 'Non-Cancer' : prob > 0.5;
		this.suggestion = '' ? '' : prob > 0.5;
		this.createdAt = new Date().toISOString();
	}
}

module.exports = { PredictionResult };
