(function (window){
	var byeSpeaker={};
	var speakWord = "Good Bye";
    byeSpeaker.speak=function(y) {
    byeSpeaker.name=y;
    console.log(speakWord + " " + byeSpeaker.name);
}

window.byeSpeaker=byeSpeaker;

})(window);