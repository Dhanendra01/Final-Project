// javascript
var dataset =[170, 120, 430, 340, 357, 200]

var svgWidth = 500, svgHeight = 500, barPadding = 20;
var barWidth = (svgWidth/dataset.length);

var svg = d3.select('svg')
    .attr("width",svgWidth)
    .attr("height",svgHeight);

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d){
    	return svgHeight - d
    })

.attr("height", function(d) {
	return d;
})

.attr("width", barWidth-barPadding)
.attr("transform", function (d, i){
	var translate =[barWidth * i, 0];
	return "translate("+translate +")";
});

var text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {
    	return d;
    })

  	.attr("y", function(d, i) {
		return svgHeight - d - 2;
	})

	.attr("x", function(d, i) {
	return barWidth * i;
	})  

	.attr("fill", "#A64C38");
