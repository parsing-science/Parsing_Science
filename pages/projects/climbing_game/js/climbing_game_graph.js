 // climbing_game_graph.js by Nicole Carlson
 // Set up climbing game graph for Climbing Game

// Set up the height, width, margins of graphing area
function SetUpGraph(){
  Climbing.w = 500
  Climbing.h = 450
  Climbing.margin=20

  var svg = d3.select("#climbing-game-graph").append("svg")
    .attr("width", Climbing.w)
    .attr("height", Climbing.h)
    .attr("id", "climbing")        
}

// This function adds a rectangle to the graph.
function AddRect(id, x, y){
  /* Parameters:
  id: your name for this rectangle
  x: x location of the rectangle
  y: y location of the rectangle
  */        

	var temp_rect=d3.select("#climbing").append("svg:rect")
		.data([{"x":x, "y": y}])
		.attr("height", Climbing.h)
		.attr("width", Climbing.w-Climbing.margin)
		.attr("fill", "red")
		.attr("transform", "translate("+x+","+y+")")
}

// This function adds an ellipse to the graph.
function AddEllipse(id, cx, cy, rx, ry, scale){
  /* Parameters:
  id: your name for this ellipse
  cx: x location of the ellipse
  cy: y location of the ellipse
  rx: x radius of the ellipse
  ry: y radius of the ellipse
  scale: scale factor for the whole grid
  */

  var circle=d3.select("#climbing").append("svg:ellipse")
   .attr("fill", "black")
   .data([{"x":cx*scale, "y": cy*scale}])
   .attr("id", id)
   .attr("cx", cx*scale)
   .attr("cy", cy*scale)
   .attr("rx", rx*scale)
   .attr("ry", ry*scale)
}

SetUpGraph();
AddRect("temprect", 0, 0);
AddEllipse("ellipse", 10, 10, 10, 10, 1)