var _ = require('lodash');


exports.handler = function(e, ctx, cb) {
    let result = _.add(24, 18); // ;)
    
    //ctx.succeed(result);
    //ctx.fail('Some error');
    //ctx.done(null, {data: result});
    //cb(new Error('Some error'));
    //cb('Some error');
    cb(null, result);
};