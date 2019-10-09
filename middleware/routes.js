const apiRoutes = require( "../api/router" );
const error = require( "../config/error" );
const apidocRoutes = require( "../api/apiDocRoute" );

// Route config
module.exports = (app) => {
    app.use( "/api/v1", apiRoutes );
    app.use( "/api/v1", apidocRoutes );
    app.use(error);
}