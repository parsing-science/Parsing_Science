//var_buttons sets up the actions for the clickable buttons on the page. This is the first JS called.
// Nicole Carlson

window.Concerts={}

Concerts.list=[]

Concerts.topBands=[]

Concerts.uniqueBands=[]

Concerts.topVenues=[]

Concerts.uniqueVenues=[]

// Click function settings button.
$(function() {
  $('#concert-button').click(function(event) {
    event.preventDefault();

    var concertDate=$('#concert-date-input').val().trim()
    //console.log(concertDate)

    var concertVenue = $('#concert-venue-input').val().trim()
    //console.log(concertVenue)

    if($.inArray(String(concertVenue).trim(), Concerts.uniqueVenues)==-1){
      Concerts.uniqueVenues.push(String(concertVenue).trim())
      Concerts.topVenues.push({"Venue": String(concertVenue).trim(), "Count": 1})
    }
    else{
      for(j=0; j< Concerts.topVenues.length; j++){
        if(Concerts.topVenues[j].Venue==String(concertVenue).trim()){
          Concerts.topVenues[j].Count+=1
          console.log("SAME VENUE")
        }
      }
    }

    var concertBands = $('#concert-bands-input').val().trim()
    //console.log(concertBands)

    AddTableRow(concertDate, concertVenue, concertBands)

    var tempBandlist=concertBands.split(",")

    console.log("LENGTH: "+tempBandlist.length)

    for (i=0; i< tempBandlist.length; i++){
      console.log("Current Band: "+tempBandlist[i].trim())
      if($.inArray(String(tempBandlist[i]).trim(), Concerts.uniqueBands)==-1){
        Concerts.uniqueBands.push(String(tempBandlist[i]).trim())
        Concerts.topBands.push({"Band": String(tempBandlist[i]).trim(), "Count": 1})
      }
      else{
        for(j=0; j< Concerts.topBands.length; j++){
          if(Concerts.topBands[j].Band==tempBandlist[i].trim()){
            Concerts.topBands[j].Count+=1
            console.log("SAME BAND")
          }
        }
      }
    }

    console.log(Concerts.topBands)

    currentShow={"Date": concertDate, "Venue": concertVenue, "Band": tempBandlist}
    Concerts.list.push(currentShow)
    //console.log(Concerts)

    $('#concert-date-input').val("")
    $('#concert-venue-input').val("")
    $('#concert-bands-input').val("")
    
  });
});

function AddTableRow(date, venue, bands) {
    var table = document.getElementById("concert-table");
    var row = table.insertRow(-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    cell0.innerHTML = date;
    cell1.innerHTML = venue;
    cell2.innerHTML = bands;
}

// Click function settings button.
$(function() {
  $('#top-bands-button').click(function(event) {
    event.preventDefault();

    $(".graph-wrapper").hide()
    $("#band-graph-wrapper").show()

    d3.select("#band-graph").selectAll("g").remove()

    for(i=0; i < Concerts.topBands.length; i++){
      var tempBand=Concerts.topBands[i].Band
      var tempCount=Concerts.topBands[i].Count

      Concerts.AddCircle(tempBand, tempCount, 250*Math.random()+25, 250*Math.random()+25)
    }
    
  });
});

// Click function settings button.
$(function() {
  $('#top-venues-button').click(function(event) {
    event.preventDefault();

    $(".graph-wrapper").hide()
    $("#venue-graph-wrapper").show()

    console.log("TEST")

    d3.select("#venue-graph").selectAll("g").remove()

    for(i=0; i < Concerts.topVenues.length; i++){
      var tempVenue=Concerts.topVenues[i].Venue
      var tempCount=Concerts.topVenues[i].Count

      Concerts.AddRectangle(tempVenue, tempCount, 250*Math.random()+25, 250*Math.random()+25)
    }
    
  });
});