import {mockEvent, mockContext} from './';

const DEFAULT_HANDLER_NAME = 'handler';


export default (lambdaName, handlerName = DEFAULT_HANDLER_NAME) => {
    let lambdaHandler = require('../../lambdas/' + lambdaName)[handlerName];

    if(typeof(lambdaHandler) !== 'function') {
        throw new Error('Wrong handler');
    }

    return (req, res) => {
        let event = mockEvent(req);
        let context = mockContext(req, res);

        lambdaHandler.call({}, event, context, context.done);
    }
}