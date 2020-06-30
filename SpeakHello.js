
(function(window){
 	var helloSpeaker={};
 	var speakWord = "Hello";

helloSpeaker.speak=function(x) {
  helloSpeaker.name=x;
  console.log(speakWord + " " + helloSpeaker.name);
}

window.helloSpeaker=helloSpeaker;

})(window);



