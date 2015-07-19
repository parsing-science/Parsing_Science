// band_graph.js 
// Nicole Carlson

// Create Band Graph
$(function() {

	Concerts.AddCircle=function(id, radius, x, y){

		// Overall g element for segments
    var bandCircle = d3.select("#band-graph")
      .append("svg:g")
      .data([{"x":x, "y": x}])
      .attr("transform", "translate(" + x + "," + y + ")")
      .attr("id", "segmentG"+name)
      .call(onDragDrop(dragmove));

		var circle=bandCircle.append("svg:circle")
			.attr("r", 10*radius)
			.attr("stroke", "black")
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

      console.log("d3.event.dx: "+d3.event.dx)
      console.log("d3.event.dy: "+d3.event.dy)

      var tempX=Math.max(0, Math.min(300, d.x))
      var tempY=Math.max(0, Math.min(300, d.y))
      console.log("d.x: "+d.x)
      console.log("d.y: "+d.y)
      console.log("tempX: "+tempX)
      console.log("tempY: "+tempY)
      d3.select(this).attr("transform", "translate(" + tempX + "," + tempY + ")");
    }
	}

	Concerts.AddRectangle=function(id, radius, x, y){

		// Overall g element for segments
    var venueSquare = d3.select("#venue-graph")
      .append("svg:g")
      .data([{"x":x, "y": x}])
      .attr("transform", "translate(" + x + "," + y + ")")
      .attr("id", id)
      .call(onDragDrop(dragmove));

		var square=venueSquare.append("svg:rect")
			.attr("height", 10*radius)
			.attr("width", 10*radius)
			.attr("stroke", "black")
			.attr("fill", "#F9C22E")

		var text = venueSquare.append("svg:text")
      .text(id)
      .attr("x", 5*radius)
      .attr("y", 5*radius)
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

      var tempX=Math.max(0, Math.min(300, d.x))
      var tempY=Math.max(0, Math.min(300, d.y))
      console.log("d.x: "+d.x)
      console.log("d.y: "+d.y)
      console.log("tempX: "+tempX)
      console.log("tempY: "+tempY)
      d3.select(this).attr("transform", "translate(" + tempX + "," + tempY + ")");
    }
	}

});