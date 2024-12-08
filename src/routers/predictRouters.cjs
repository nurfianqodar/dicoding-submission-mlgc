const { Router } = require('express');
const {
	historyHandler,
	predictHandler,
} = require('../handlers/predictHandlers');

const predictRouter = Router();

predictRouter.post('/', predictHandler);
predictRouter.get('/histories', historyHandler);

module.exports = {
	predictRouter,
};
