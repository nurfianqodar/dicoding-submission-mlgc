class HTTPError {
	constructor(message) {
		(this.status = 'fail'), (this.message = message);
	}
}

class BadRequestError extends HTTPError {
	constructor() {
		super('Terjadi kesalahan dalam melakukan prediksi');
	}
}

class ContentTooLargeError extends HTTPError {
	constructor() {
		super('Payload content length greater than maximum allowed: 1000000');
	}
}

module.exports = {
	BadRequestError,
	ContentTooLargeError,
};
