var d3 = require('d3');

var Area = function() {
    var dataArray = [12, 17, 20, 25, 35, 47, 55, 64, 72, 87, 99, 110, 130, 140, 160, 175, 180];
    var dataYears = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']


    var height = 200,
        width = 500;

    var margin = { left: 50, right: 50, top: 40, bottom: 0 };
    var y = d3.scaleLinear().domain([0, 180]).range([height, 0]);
    var yAxis = d3.axisLeft(y);

    var area = d3.area()
        .x(function(d, i) {
            return i * 20;
        })
        .y0(height)
        .y1(function(d) {
            return y(d);
        });
    var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");
    var chartGroup = svg.append('g').attr('class', "group").attr('transform', "translate(" + margin.left + "," + margin.top + ")");
    chartGroup.append('path')
        .attr('d', area(dataArray))
        .attr('fill',"tomato" )
        .attr('stroke',"blue" );
    svg.append('g')
        .attr('class', "axis y").attr('transform', "translate(" + margin.left + "," + margin.top + ")").call(yAxis);
}
module.exports = Area;
