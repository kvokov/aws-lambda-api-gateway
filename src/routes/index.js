import {Router} from 'express';
import {name, description, version} from '../../package.json';
import lambdasRouter from './lambda';


export default function () {
    const router = Router();


    router.get('/', (req, res) => res.json({name, description, version}));
    router.get('/status', (req, res) => res.send('OK'));

    router.use('/', lambdasRouter);


    return router;
}