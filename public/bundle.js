/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("var d3 = __webpack_require__(2);\r\n__webpack_require__(3);\r\n\r\n\r\n//var Shapes=require('Shapes');\r\n// var s1=new Shapes(\"tomato\");\r\n// var s2=new Shapes(\"lawngreen\");\r\n//Shapes();\r\n\r\n// var Interpolate=require('Interpolate');\r\n// Interpolate();\r\n\r\nvar Area=__webpack_require__(7);\r\nArea();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmpzPzg2YTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZDMgPSByZXF1aXJlKCdkMycpO1xyXG5yZXF1aXJlKCdBcHBzdHlsZXMnKTtcclxuXHJcblxyXG4vL3ZhciBTaGFwZXM9cmVxdWlyZSgnU2hhcGVzJyk7XHJcbi8vIHZhciBzMT1uZXcgU2hhcGVzKFwidG9tYXRvXCIpO1xyXG4vLyB2YXIgczI9bmV3IFNoYXBlcyhcImxhd25ncmVlblwiKTtcclxuLy9TaGFwZXMoKTtcclxuXHJcbi8vIHZhciBJbnRlcnBvbGF0ZT1yZXF1aXJlKCdJbnRlcnBvbGF0ZScpO1xyXG4vLyBJbnRlcnBvbGF0ZSgpO1xyXG5cclxudmFyIEFyZWE9cmVxdWlyZSgnQXJlYScpO1xyXG5BcmVhKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {


/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3R5bGVzL2FwcC5zY3NzP2RhZTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvc3R5bGVzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("var d3 = __webpack_require__(2);\r\n\r\nvar Area = function() {\r\n    var dataArray = [12, 17, 20, 25, 35, 47, 55, 64, 72, 87, 99, 110, 130, 140, 160, 175, 180];\r\n    var dataYears = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']\r\n\r\n    var parseDate=d3.timeParse(\"%Y\");\r\n\r\n\r\n    var height = 200,\r\n        width = 500;\r\n\r\n    var margin = { left: 50, right: 50, top: 40, bottom: 0 };\r\n    var y = d3.scaleLinear().domain([0, d3.max(dataArray)])\r\n        .range([height, 0]);\r\n\r\n    var x = d3.scaleTime().domain(d3.extent(dataYears,function (d) {\r\n        return parseDate(d);\r\n    })).range([0, width]);\r\n\r\n\r\n    var yAxis = d3.axisLeft(y).ticks(3).tickPadding(10).tickSize(10);\r\n    var xAxis = d3.axisBottom(x);\r\n\r\n    var area = d3.area()\r\n        .x(function(d, i) {\r\n            return x(parseDate(dataYears[i]));\r\n        })\r\n        .y0(height)\r\n        .y1(function(d) {\r\n            return y(d);\r\n        });\r\n\r\n    var svg = d3.select(\"body\").append(\"svg\").attr(\"height\", \"100%\").attr(\"width\", \"100%\");\r\n    var chartGroup = svg.append('g').attr('class', \"group\").attr('transform', \"translate(\" + margin.left + \",\" + margin.top + \")\");\r\n    chartGroup.append('path')\r\n        .attr('d', area(dataArray))\r\n        .attr('fill', \"tomato\");\r\n    chartGroup.append('g')\r\n        .attr('class', \"axis y\")\r\n        .call(yAxis);\r\n    chartGroup.append('g')\r\n        .attr('class', \"axis x\")\r\n        .attr(\"transform\",\"translate(0,\"+height+\")\")\r\n        .call(xAxis);\r\n\r\n}\r\nmodule.exports = Area;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvQXJlYS5qcz8wNGU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGQzID0gcmVxdWlyZSgnZDMnKTtcclxuXHJcbnZhciBBcmVhID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZGF0YUFycmF5ID0gWzEyLCAxNywgMjAsIDI1LCAzNSwgNDcsIDU1LCA2NCwgNzIsIDg3LCA5OSwgMTEwLCAxMzAsIDE0MCwgMTYwLCAxNzUsIDE4MF07XHJcbiAgICB2YXIgZGF0YVllYXJzID0gWycyMDAwJywgJzIwMDEnLCAnMjAwMicsICcyMDAzJywgJzIwMDQnLCAnMjAwNScsICcyMDA2JywgJzIwMDcnLCAnMjAwOCcsICcyMDA5JywgJzIwMTAnLCAnMjAxMScsICcyMDEyJywgJzIwMTMnLCAnMjAxNCcsICcyMDE1JywgJzIwMTYnXVxyXG5cclxuICAgIHZhciBwYXJzZURhdGU9ZDMudGltZVBhcnNlKFwiJVlcIik7XHJcblxyXG5cclxuICAgIHZhciBoZWlnaHQgPSAyMDAsXHJcbiAgICAgICAgd2lkdGggPSA1MDA7XHJcblxyXG4gICAgdmFyIG1hcmdpbiA9IHsgbGVmdDogNTAsIHJpZ2h0OiA1MCwgdG9wOiA0MCwgYm90dG9tOiAwIH07XHJcbiAgICB2YXIgeSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCBkMy5tYXgoZGF0YUFycmF5KV0pXHJcbiAgICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKTtcclxuXHJcbiAgICB2YXIgeCA9IGQzLnNjYWxlVGltZSgpLmRvbWFpbihkMy5leHRlbnQoZGF0YVllYXJzLGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRGF0ZShkKTtcclxuICAgIH0pKS5yYW5nZShbMCwgd2lkdGhdKTtcclxuXHJcblxyXG4gICAgdmFyIHlBeGlzID0gZDMuYXhpc0xlZnQoeSkudGlja3MoMykudGlja1BhZGRpbmcoMTApLnRpY2tTaXplKDEwKTtcclxuICAgIHZhciB4QXhpcyA9IGQzLmF4aXNCb3R0b20oeCk7XHJcblxyXG4gICAgdmFyIGFyZWEgPSBkMy5hcmVhKClcclxuICAgICAgICAueChmdW5jdGlvbihkLCBpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB4KHBhcnNlRGF0ZShkYXRhWWVhcnNbaV0pKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC55MChoZWlnaHQpXHJcbiAgICAgICAgLnkxKGZ1bmN0aW9uKGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHkoZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgdmFyIHN2ZyA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJoZWlnaHRcIiwgXCIxMDAlXCIpLmF0dHIoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgICB2YXIgY2hhcnRHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsIFwiZ3JvdXBcIikuYXR0cigndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcclxuICAgIGNoYXJ0R3JvdXAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgICAuYXR0cignZCcsIGFyZWEoZGF0YUFycmF5KSlcclxuICAgICAgICAuYXR0cignZmlsbCcsIFwidG9tYXRvXCIpO1xyXG4gICAgY2hhcnRHcm91cC5hcHBlbmQoJ2cnKVxyXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIFwiYXhpcyB5XCIpXHJcbiAgICAgICAgLmNhbGwoeUF4aXMpO1xyXG4gICAgY2hhcnRHcm91cC5hcHBlbmQoJ2cnKVxyXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIFwiYXhpcyB4XCIpXHJcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZSgwLFwiK2hlaWdodCtcIilcIilcclxuICAgICAgICAuY2FsbCh4QXhpcyk7XHJcblxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gQXJlYTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvQXJlYS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);