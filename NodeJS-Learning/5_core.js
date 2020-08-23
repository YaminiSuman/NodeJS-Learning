// core modules are not needed to install using npm
// it comes with node installation
// like path, util - which has logs related methods that store date as well
// v8 - get heap statistics

const util = require("util");
const path = require("path");
const v8 = require("v8");
// can destructure single module as well

// const { getHeapStatistics } = require("v8");

util.log(path.basename(__filename));
util.log(v8.getHeapStatistics());
