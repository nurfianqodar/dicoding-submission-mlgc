const { Router } = require('express');
const {
	historyHandler,
	predictHandler,
} = require('../handlers/predictHandlers');

const multer = require('multer');

const imageStorage = multer.memoryStorage();
const upload = multer({ storage: imageStorage });

const predictRouter = Router();

predictRouter.post('/', upload.single('image'), predictHandler);
predictRouter.get('/histories', historyHandler);

module.exports = {
	predictRouter,
};
