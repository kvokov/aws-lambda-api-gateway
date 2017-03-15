exports.handler = function(e, ctx, cb) {
    ctx.succeed(`Hello, ${e.path.name}!`);
};