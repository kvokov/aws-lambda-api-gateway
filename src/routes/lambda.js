import pick from 'lodash/pick';
import {Router} from 'express';
import {createLambdaHandler} from '../helpers';
import swaggerConfig from '../config/swagger.json';


const router = Router();

for(let path in swaggerConfig.paths) {
    let pathStr = path.split('{').join(':')
        .split('}').join('');

    let pathMethods = pick(swaggerConfig.paths[path], ['get', 'post', 'put', 'delete', 'path']);
    for(let method in pathMethods) {
        let lambdaHandler = pathMethods[method].operationId.split('/');

        let lambdaName = lambdaHandler[0];
        let handlerName = lambdaHandler[1];
        
        router.route(pathStr)[method](createLambdaHandler(lambdaName, handlerName));
    }
}

export default router;