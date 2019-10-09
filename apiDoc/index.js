// Shows the api routes the browser
exports.showApiRoutes = ( req, res ) => {
  res.json( {
    post: "/create",
    delete: "/delete/:type"
  } );
}