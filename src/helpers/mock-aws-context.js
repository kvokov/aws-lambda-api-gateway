export default (req, res) => {
    let hash = (Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2)).substr(0, 32);
    let basename = 'TEST_LAMBDA_FUNCTION'; // TODO: need to use real lambda name

    const context = {
        awsRequestId: [hash.substr(0, 8), hash.substr(8, 4), hash.substr(12, 4), hash.substr(16, 4), hash.substr(20, 12)].join('-'),
        logGroupName: '/aws/lambda/' + basename,
        logStreamName: (new Date()).toISOString().substr(0, 10).replace(/-/g, '/') + '/[$LATEST]' + hash,
        functionName: basename,
        memoryLimitInMB: '128',
        functionVersion: '$LATEST',
        invokedFunctionArn: 'arn:aws:lambda:aws-region:1234567890123:function:' + basename,
        identity: {},
        clientContext: {}
    };
    context.invokeId = context.awsRequestId;



    context.succeed = (result) => {
        if(res.headersSent) return;

        if(typeof(result) == 'number') {
            result += '';
        }

        res.status(200).send(result);
    };

    context.fail = (err) => {
        if(res.headersSent) return;

        res.status(500).send(err instanceof Error ? err.message : err);
    };

    context.done = (err, result) => {
        if(res.headersSent) return;

        if(err) {
            return context.fail(err);
        }

        context.succeed(result);
    };

    context.getRemainingTimeInMillis = () => {
        throw new Error('Method not implemented yet');
    };

    return context;
};