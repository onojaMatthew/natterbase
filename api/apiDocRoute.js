const express = require( "express" );
const { showApiRoutes } = require( "../apiDoc" );

const router = express.Router(); 

router.get( "/apidoc", showApiRoutes );

module.exports = router;