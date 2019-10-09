// Shows the api routes the browser
exports.showApiRoutes = ( req, res ) => {
  res.json( {
    post: "/create",
    get: "/fetch",
    delete: "/delete/:type"
  } );
}

// https://enigmatic-wave-77701.herokuapp.com/api/v1/apidoc