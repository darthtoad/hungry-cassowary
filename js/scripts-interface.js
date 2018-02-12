import { HungryCassowary } from "./../js/scripts.js";

$(document).ready(function(){
  let kerchov = new HungryCassowary("Kerchov");
  kerchov.setHunger();
  let thingy = setInterval(() => {
    if (kerchov.didYouGetKickedInTheBalls()) {
      alert("You just got kicked in the balls because you didn't feed Kerchov!");
      $("#pic").empty();
      $("#pic").append('<span title="You suck because you didn\'t feed it!"><img src="./../img/Cassowary-attack.jpg" alt="Angry Cassowary" /></span>');
    }
  }, 1000);

  let clear = setInterval(() => {
    if (kerchov.didYouGetKickedInTheBalls()) {
      clearInterval(thingy);
    }
  }, 1050);

  $("#button").click(function(){
    kerchov.feed();
  })
})
