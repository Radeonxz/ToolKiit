const path = require("path");

global.__base = __dirname + "/";

const { urlScreenShot } = require(path.join(
  __base,
  "tools/urlScreenShot/index"
));

const url = "";
urlScreenShot(url);
