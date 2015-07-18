//var_buttons sets up the actions for the clickable buttons on the page. This is the first JS called.
// Nicole Carlson

// Sets up global object. Global variables/functions can be attached to this and accessed everywhere.
var ERA={}

ERA.games_chosen=false
ERA.runs_chosen=false

// Click function for info from graph.
$(function() {
  $('#graph_info-button').click(function(event) {
    event.preventDefault();

    var checkboxes = document.getElementsByName('graph_info_checkbox');
    console.log(checkboxes)
    ERA.selected = [];
    for (var i=0; i<checkboxes.length; i++) 
    {
      if (checkboxes[i].checked) 
      {
        ERA.selected.push(checkboxes[i].value);
        if(checkboxes[i].value=="Games")
          {
            ERA.games_chosen=true
          }
        else if (checkboxes[i].value=="Runs")
          {
            ERA.runs_chosen=true
          }
      }
    }
    console.log("LENGTH: "+ERA.selected.length)
    console.log(ERA.selected)

    if (ERA.runs_chosen && !ERA.games_chosen)
    {
      console.log("chose only runs")
      $('#graph_info_response').html("")
      $("#graph_info-button").hide();
      $("#user_init_runs").show();
    }
    else if (ERA.runs_chosen && ERA.games_chosen)
    {
      console.log("CHOSE RUNS AND GAMES")
      $('#graph_info_response').html("Are you sure you can find both of those things? Try again.")
      $("#graph_info-button").hide();
      $("#graph_info_reset-button").show(); 
    }
    else if (ERA.games_chosen && !ERA.runs_chosen)
    {
      console.log("chose only games")
      $('#graph_info_response').html("Are you sure you can find the number of games? Try again.")
      $("#graph_info-button").hide();
      $("#graph_info_reset-button").show(); 
    } 
  });
});

// Reset function for graph info.
$(function() {
  $('#graph_info_reset-button').click(function(event) {
    event.preventDefault();
    $('input[type=checkbox]').attr('checked',false);
    ERA.runs_chosen=false
    ERA.games_chosen=false
    $("#graph_info-button").show();
    $("#graph_info_reset-button").hide(); 
    $('#graph_info_response').html("")
    
  });
});

// Click function for initial number of runs.
$(function() {
  $('#user_init_runs-button').click(function(event) {
    event.preventDefault();
  
    var user_init_runs= parseFloat($('#user_init_runs-field').val())
    console.log("The answer for init runs: ")
    console.log(user_init_runs)

    if (user_init_runs==ERA.init_runs) 
    {
      $('#user_init_runs-result').html("Correct!");
      $("#more_help").show();
      $("#user_init_runs-button").hide();

    }
    else 
    {
      $('#user_init_runs-result').html("Incorrect. Try again")
      $("#user_init_runs-button").hide();
      $("#user_init_runs_reset-button").show();       
    }
    
  });
});

// Reset function for init number of runs.
$(function() {
  $('#user_init_runs_reset-button').click(function(event) {
    event.preventDefault();
    $("#user_init_runs-button").show();
    $("#user_init_runs_reset-button").hide(); 
    $('#user_init_runs-result').html("")
    
  });
});

// Click function if the user needs more help.
$(function() {
  $('#more_help-button').click(function(event) {
    event.preventDefault();
     
    ERA.help_choice = $('input[name="help_choice"]:checked').val();

    if(ERA.help_choice=="help_yes"){
      $('#more_help-result').html("Great! Enter your answer below.") 
      $("#user_final_ERA").show(); 
    }
    else if(ERA.help_choice=="help_no"){
      $('#more_help-result').html("Ok, here's some more help with solving this problm.")
      $("#extra_help").show(); 
    }


  });
});

// Click function for extra help answers.
$(function() {
  $('#extra_help-button').click(function(event) {
    event.preventDefault();
    var user_total_runs_answer= parseFloat($('#user_total_runs-field').val())
    var user_total_innings_answer= parseFloat($('#user_total_innings-field').val())

    if (user_total_runs_answer==ERA.total_runs && user_total_innings_answer==ERA.total_innings) 
    {
      $('#extra_help-result').html("Correct! Now use the equation to find the final answer.");
      $("#extra_help-button").hide();
      $("#user_final_ERA").show();
    }
    else if (user_total_runs_answer==ERA.total_runs)
    {
      $('#extra_help-result').html("You got the total number of runs correct. Try again with the total number of innings.")
      $("#extra_help-button").hide();
      $("#extra_help-reset-button").show();       
    }
    else if (user_total_innings_answer==ERA.total_innings)
    {
      $('#extra_help-result').html("You got the total number of innings correct. Try again with the total number of runs.")
      $("#extra_help-button").hide();
      $("#extra_help-reset-button").show();       
    }
    else
    {
      $('#extra_help-result').html("Both of your answers are incorrect. Try again.")
      $("#extra_help-button").hide();
      $("#extra_help-reset-button").show();       
    }
    
  });
});

// Reset extra help.
$(function() {
  $('#extra_help-reset-button').click(function(event) {
    event.preventDefault();
    $("#extra_help-button").show();
    $("#extra_help-reset-button").hide(); 
    $('#extra_help-result').html("")
    
  });
});

// Click function when user submits their ERA answer.
$(function() {
  $('#user_final_ERA-button').click(function(event) {
    event.preventDefault();
    var user_final_ERA_answer= parseFloat($('#user_final_ERA-field').val())

  	console.log("The answer: ")
    console.log(user_final_ERA_answer)
    console.log(ERA.final_ERA)

    if (user_final_ERA_answer==ERA.final_ERA) 
    {
      $('#user_final_ERA-result').html("Correct!");
      $("#user_final_ERA-button").hide();
    }
    else 
    {
     	$('#user_final_ERA-result').html("Incorrect. Try again")
      $("#user_final_ERA-button").hide();
      $("#user_final_ERA_reset-button").show();      	
     }
    
  });
});

// Reset function for final ERA.
$(function() {
  $('#user_final_ERA_reset-button').click(function(event) {
    event.preventDefault();
    $("#user_final_ERA-button").show();
    $("#user_final_ERA_reset-button").hide(); 
    $('#user_final_ERA-result').html("")
    
  });
});