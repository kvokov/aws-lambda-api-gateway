export default (req) => {
    const event = {
        body: {...req.body},
        method: req.method,
        principalId: '',
        stage: 'dev',
        headers: {...req.headers},
        query: {...req.query},
        path: {...req.params},
        identity: {
            cognitoIdentityPoolId: '',
            accountId: '',
            cognitoIdentityId: '',
            caller: '',
            apiKey: '',
            sourceIp: '',
            cognitoAuthenticationType: '',
            cognitoAuthenticationProvider: '',
            userArn: '',
            userAgent: '',
            user: ''
        },
        stageVariables: {}
    };

    return event;
};