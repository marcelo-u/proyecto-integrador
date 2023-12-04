const path = require("path")

const NotFound = ((req, res) => (
    res.status(404).sendFile(path.resolve(__dirname, "../../public/pages/404.html"))
));

module.exports = NotFound