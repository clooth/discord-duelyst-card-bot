var Units = require("./Units.json");

var unitPattern = /\[([\w\s\d.!,'\-]+)\]/g;

module.exports = function (text) {

    var matches = unitPattern.exec(text);
    if (!matches) {
        return null;
    }

    var unitName = matches[1];

    return Units.filter(function (unit) {
        return unit.Name.toLowerCase() == unitName.toLowerCase()
    })[0];
};