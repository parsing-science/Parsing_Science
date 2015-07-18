//var_buttons sets up the actions for the clickable buttons on the page. This is the first JS called.
// Nicole Carlson

Climbing={};

// Click function settings button.
$(function() {
  $('#difficulty-settings-button').click(function(event) {
    event.preventDefault();

    difficultySetting=$("#difficulty-settings input[type='radio']:checked").val()
    console.log(difficultySetting)

    switch (difficultySetting){
      case "easy":
        Climbing.speed=10;
        break;
      case "medium":
        Climbing.speed=20;
        break;
      case "hard":
        Climbing.speed=30;
        break;
    }

    $('#difficulty-settings').hide();

    $('#difficulty-setting-choice').html("Difficulty Setting: "+difficultySetting);

    $('#climbing-game-graph').show();

    
  });
});