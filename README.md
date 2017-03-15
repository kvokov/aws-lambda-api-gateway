# Simple AWS Lambda API Gateway

> Simple API Gateway implementation for local AWS Lambda development

## Getting started

#### Installation
```shell
$ git clone https://github.com/kvokov/aws-lambda-api-gateway.git gateway
$ cd gateway
$ npm install
$ npm start
```

#### Adding lambdas

- Put your lambda function in [`lambdas`](/lambdas) directory
- Update `src/config/swagger.json`. Follow Swagger [specification](http://swagger.io/specification/)
> IMPORTANT: `operationId` parameter should be in format `"lambda-name/handler-name"` (by default `handler-name` is `handler`)
- Follow examples in [`lambdas`](/lambdas) directory.

#### Test your lambdas

**That's it!** :sunglasses:

## License

[MIT](LICENSE)