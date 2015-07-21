// band_graph.js: Sets up graphs for bands and venues
// Nicole Carlson


$(function() {

  // Add a circle to the Band Graph
	Concerts.AddCircle=function(id, radius, x, y){
    /* Parameters:
    id: id for the circle, usually the band name
    radius: radius of the circle
    x,y: initial coordinates of the circle
    */

		// Overall g element for circle
    var bandCircle = d3.select("#band-graph")
      .append("svg:g")
      .data([{"x":x, "y": y}])
      .attr("transform", "translate(" + x + "," + y + ")")
      .attr("id", id)
      .call(onDragDrop(dragmove));

		var circle=bandCircle.append("svg:circle")
			.attr("r", 10*radius)
			.attr("stroke", "gray")
			.attr("fill", "#F9C22E")

		var text = bandCircle.append("svg:text")
      .text(id)
      .attr("y", ".5em")
      .attr("text-anchor", "middle")
      .attr("font-weight", 700)
      .attr("font-size", 5)
      .attr("font-family", "Helvetica")
      .attr("fill", "black")
      .attr("stroke", "none")

    function onDragDrop(dragHandler) {
      var drag = d3.behavior.drag();
      drag.on("drag", dragHandler)
      //.on("dragend", dropHandler);
      return drag;
    }

    function dragmove(d) {
      d.x += d3.event.dx;
      d.y += d3.event.dy;

      // console.log(d3.select(this).data())

      // console.log("d3.event.dx: "+d3.event.dx)
      // console.log("d3.event.dy: "+d3.event.dy)

      //Prevent object from being dragged offscreen.
      var tempX=Math.max(0, Math.min(300, d.x))
      var tempY=Math.max(0, Math.min(300, d.y))

      // console.log("d.x: "+d.x)
      // console.log("d.y: "+d.y)
      // console.log("tempX: "+tempX)
      // console.log("tempY: "+tempY)
      d3.select(this).attr("transform", "translate(" + tempX + "," + tempY + ")");
    }
	}

  //Add a rectangle to the venue graph (this will be a square most of the time)
	Concerts.AddRectangle=function(id, width, x, y){
    /* Parameters:
    id: id for the rectangle, usually the venue name
    width: width of the rectangle
    x,y: initial coordinates of the rectangle
    */

		// Overall g element for rectangle
    var venueSquare = d3.select("#venue-graph")
      .append("svg:g")
      .data([{"x":x, "y": y}])
      .attr("transform", "translate(" + x + "," + y + ")")
      .attr("id", id)
      .call(onDragDrop(dragmove));

		var square=venueSquare.append("svg:rect")
			.attr("height", 10*width)
			.attr("width", 10*width)
			.attr("stroke", "gray")
			.attr("fill", "#F9C22E")

		var text = venueSquare.append("svg:text")
      .text(id)
      .attr("x", 5*width)
      .attr("y", 5*width)
      .attr("text-anchor", "middle")
      .attr("font-weight", 700)
      .attr("font-size", 5)
      .attr("font-family", "Helvetica")
      .attr("fill", "black")
      .attr("stroke", "none")

    function onDragDrop(dragHandler) {
      var drag = d3.behavior.drag();
      drag.on("drag", dragHandler)
      //.on("dragend", dropHandler);
      return drag;
    }

    function dragmove(d) {
      d.x += d3.event.dx;
      d.y += d3.event.dy;

      //console.log(d3.select(this).data())

      //Prevent object from being dragged offscreen.
      var tempX=Math.max(0, Math.min(295, d.x))
      var tempY=Math.max(0, Math.min(295, d.y))
      
      // console.log("d.x: "+d.x)
      // console.log("d.y: "+d.y)
      // console.log("tempX: "+tempX)
      // console.log("tempY: "+tempY)
      d3.select(this).attr("transform", "translate(" + tempX + "," + tempY + ")");
    }
	}

});