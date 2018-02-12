import { HungryCassowary } from "./../js/scripts.js";

$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    $("#pic").empty();
    $("#pic").append('<span title="Feed kerchov!"><img src="/img/cassowary.jpg" alt="Cassowary" /></span>')
    $("#form").hide();
    $("#game").show();
    const difficulty = $("input:radio[name=difficulty]:checked").val()
    let kerchov = new HungryCassowary("Kerchov", difficulty);
    kerchov.setHunger();
    let thingy = setInterval(() => {
      $("#foodLevel").empty();
      if (kerchov.didYouGetKickedInTheBalls()) {
        alert("You just got kicked in the balls because you didn't feed Kerchov!");
        $("#pic").empty();
        $("#pic").append('<span title="You suck because you didn\'t feed it!"><img src="./../img/Cassowary-attack.jpg" alt="Angry Cassowary" /></span>');
        $("#form").show();
      }
      $("#foodLevel").append(`Kerchov's current food level is: ${kerchov.foodLevel}<br>
      His sleep level is: ${kerchov.sleepLevel}<br>His mood level is: ${kerchov.moodLevel}`
    );
    }, 500);

    let clear = setInterval(() => {
      if (kerchov.didYouGetKickedInTheBalls()) {
        clearInterval(thingy);
      }
    }, 500);

    $("#button").click(function(event){
      event.preventDefault();
      kerchov.feed();
    })

    $("#sleep").click(function(event){
      event.preventDefault();
      kerchov.putToBed();
    })

    $("#play").click(function(event){
      event.preventDefault();
      kerchov.play();
    })
  })
})
