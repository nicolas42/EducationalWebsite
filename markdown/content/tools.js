function showHide(id){
	// show hide block element
	// REQUIRES that <el>.style.display be initialized to
	// "none" or "block" to work properly

	it = document.querySelector(id);
	if (it.style.display === "flex"){
		it.style.display = "none";
	} else {
		it.style.display = "flex";
	}
}

function playPause(arg) {
	var video = document.querySelector(arg);
  if (video.paused) {
	video.play();
  } else {
	video.pause();
  }
}

function toggleMargins() {
	var style = document.body.style;
  if (style.maxWidth !== '800px') {
	style.maxWidth = '800px';
  } else {
	style.maxWidth = 'none';
  }
}