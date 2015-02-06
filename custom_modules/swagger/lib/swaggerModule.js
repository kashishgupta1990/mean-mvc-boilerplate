"use strict";

//The SwaggerModule Class
function SwaggerModule() {
    var _this = {};
    _this.swagger = {};

    _this.create = function (expressApp) {
        _this.swagger = require("swagger-node-express").createNew(expressApp);
    };

    // Add models and methods to swagger
    _this.swagger
        .addGet(petResources.findByTags)    // - /pet/findByTags
        .addGet(petResources.findByStatus)  // - /pet/findByStatus
        .addGet(petResources.findById)      // - /pet/{petId}
        .addPost(petResources.addPet)
        .addPut(petResources.updatePet)
        .addDelete(petResources.deletePet);

    _this.info = function (apiInfo) {
        _this.swagger.setApiInfo(apiInfo);
    };

// Configures the app's base path and api version.
    _this.swagger.configureSwaggerPaths("", "api-docs", "")

    _this.swagger.configure("http://localhost:8002", "1.0.0");

// Serve up swagger ui at /docs via static route
    var docs_handler = express.static(__dirname + '/../swagger-ui/');
    app.get(/^\/docs(\/.*)?$/, function (req, res, next) {
        if (req.url === '/docs') { // express static barfs on root url w/o trailing slash
            res.writeHead(302, {'Location': req.url + '/'});
            res.end();
            return;
        }
        // take off leading /docs so that connect locates file correctly
        req.url = req.url.substr('/docs'.length);
        return docs_handler(req, res, next);
    });

    return _this;
}

//Export
exports = module.exports = SwaggerModule;
