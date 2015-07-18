//ERA_graph.js by Nicole Carlson

// This function sets up the Graphing space. 

function SetUpGraph(){

  // Hard Code in the values from the problem.   
  ERA.init_innings=45;
  ERA.init_games=ERA.init_innings/9;
  ERA.init_ERA=1.2;
  ERA.init_runs=ERA.init_games*ERA.init_ERA;

  ERA.total_runs=12;
  ERA.total_innings=50;

  // Global variable so that the answer can be checked.
  ERA.final_ERA=(ERA.total_runs/ERA.total_innings)*9;

  //  Make a list of hte x range from 0 to 10.
  var x_range = [];
  for (var i = 0; i <= 10; i++) {
      x_range.push(i);
  }

  // Make a list of the y range for the initial ERA for x values 0 to 10.
  var y1=[];
  	for (var i=0; i <=10; i++){
  		y1.push(ERA.init_ERA*i);
  	}

// Make a list of the y range for the final ERA for x values 0 to 10.
  var y2=[];
  	for (var i=0; i<=10; i++){
  		y2.push(ERA.final_ERA*i);
  	}

  // Set the margins, width, and height of the graph.  
  var m = [80, 80, 80, 80]; // margins
  var w = 1000 - m[1] - m[3]; // width
  var h = 400 - m[0] - m[2]; // height
  		

  // X scale will fit all values from data[] within pixels 0-w
  var x = d3.scale.linear().domain([0, 10]).range([0, w]);
  // Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
  var y = d3.scale.linear().domain([0, 20]).range([h, 0]);
  // automatically determining max range can work something like this


  // create a line function that can convert data[] into x and y points
  var line = d3.svg.line()
		// assign the X function to plot our line as we wish
		.x(function(d,i) { 
			// return the X coordinate where we want to plot this datapoint
			return x(i); 
		})
		.y(function(d) { 
			// return the Y coordinate where we want to plot this datapoint
			return y(d); 
		})

  // Add an SVG element with the desired dimensions and margin and attach to correct HTML element.
  var chartERA = d3.select("#chartERA").append("svg:svg")
    .attr("width", w + m[1] + m[3])
    .attr("height", h + m[0] + m[2])
    .attr("id", "charts")
    .append("svg:g")
    .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

  // create xAxis
  var xAxis = d3.svg.axis().scale(x);
  // Add the x-axis.
  chartERA.append("svg:g")
   .attr("class", "x axis")
   .attr("transform", "translate(0," + h + ")")
   .call(xAxis)
   .append("text")
	 .style("text-anchor", "end")
	 .attr("transform", "translate(500,40)")
	 .text("Nine Innings");



  // create left yAxis
  var yAxisLeft = d3.svg.axis().scale(y).orient("left");
  // Add the y-axis to the left
  chartERA.append("svg:g")
   .attr("class", "y axis")
   .call(yAxisLeft)
   .append("text")
	 .attr("transform", "rotate(-90)")
	 .attr("y", -40)
	 .style("text-anchor", "end")
	 .text("Runs Allowed");

  // Add the line by appending an svg:path element with the data line we created above
  // do this AFTER the axes above so that the line is above the tick-lines
  chartERA.append("svg:path").attr("d", line(y1)).attr("stroke", "blue");
  //chartERA.append("svg:path").attr("d", line(y2)).attr("stroke", "red");

  // Attach a mouse focus so that the values will appear on mouse over.
  var focus = chartERA.append("g")
    .attr("class", "focus")
    .style("display", "none");

  // One circle for the initial ERA values.
  focus.append("circle")
    .attr("r", 4.5)
    .attr("class", "init");

  focus.append("text")
	  .attr("class", "init")
    .attr("x", 9)
    .attr("dy", ".35em");

  // One circle for the final ERA values.
  // focus.append("circle")
  //     .attr("r", 4.5)
  //     .attr("class", "final");

  // focus.append("text")
  // 	  .attr("class", "final")
  //     .attr("x", 9)
  //     .attr("dy", ".35em");

  // Attach a clear rectangle where the mouseover will work.    
  chartERA.append("rect")
    .attr("class", "overlay")
    .attr("width", w)
    .attr("height", h)
    .style("fill", "none")
    .style("pointer-events", "all")
    .on("mouseover", function() { focus.style("display", null); })
    .on("mouseout", function() { focus.style("display", "none"); })
    .on("mousemove", mousemove);

// Function for what should happen on the mousemove. Basically the text and circles should follow the mouse.
  function mousemove() {
    var x0 = x.invert(d3.mouse(this)[0]);
    var y0= ERA.init_ERA*x0;
    //var y1= ERA.final_ERA*x0
    var trans_init=h-(y0/20)*h
    //var trans_final=h-(y1/20)*h
    focus.select("circle.init").attr("transform", "translate("+d3.mouse(this)[0]+","+ trans_init+")");
    focus.select("text.init").text([x0.toFixed(2), y0.toFixed(2)]).attr("transform", "translate("+d3.mouse(this)[0]+","+ trans_init+")");
    //focus.select("circle.final").attr("transform", "translate("+d3.mouse(this)[0]+","+ trans_final+")");
    //focus.select("text.final").text([x0.toFixed(2), y1.toFixed(2)]).attr("transform", "translate("+d3.mouse(this)[0]+","+ trans_final+")");
  }
}

SetUpGraph();
