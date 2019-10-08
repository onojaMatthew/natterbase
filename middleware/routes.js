const apiRoutes = require( "../api/router" );
const error = require( "../config/error" );

// Route config
module.exports = (app) => {
    app.use( "/api/v1", apiRoutes );
    app.use(error);
}