const apiRoutes = require("../api/router");

module.exports = (app) => {
    app.use("/api/v1", apiRoutes);
}