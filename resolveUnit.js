var Units = require("./Units.json");
var levenshteinDistance = require("./levenshteinDistance");

var unitPattern = /\[([\w\s\d.!,'\-]+)\]/g;

module.exports = function (text) {

    var matches = unitPattern.exec(text);
    if (!matches) {
        return null;
    }

    var unitName = matches[1];

    return Units
        .map(function (unit){
            return {
                unit: unit,
                distance: levenshteinDistance.getStringsDistance(unit.Name.toLowerCase(), unitName.toLowerCase())
            }
        })
        .filter(function (unitWithDistance) {
            return unitWithDistance.distance < 3;
        })
        .sort(function (a, b){
            return a.distance - b.distance;
        })
        .map(function (unitWithDistance){
            return unitWithDistance.unit}
        )[0];
};