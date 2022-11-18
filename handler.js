const { create, jsonMiddleware } = require('slspress');

const handler = create();

handler.on('test')
    .middleware(jsonMiddleware)
    .get('/test', (req, res) => {
        return res.ok('Hello-World!');
    });

module.exports = handler.export();