var modal = document.getElementById('modal')
var modalImgSmall = document.getElementById('modal-img-small')
var modalImgLarge = document.getElementById('modal-img-large')
var modalBackground = document.getElementById('modal-background')
var modalCloseButton = document.getElementById('modal-close-button')


function on(src) {
	document.getElementById("modal").style.display = "block";
	document.getElementById("modal-img-large").src = src;
		document.getElementById('modal-img-small').src = src;


}

function off() {
	document.getElementById("modal").style.display = "none";
}
