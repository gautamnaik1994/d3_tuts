var d3 = require('d3');

var Circle = d3.select("body").append("svg").attr("width", 100).attr("height", 100).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "pink");

module.exports =Circle;