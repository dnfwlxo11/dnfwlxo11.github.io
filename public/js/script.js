var modal = document.getElementById('project-modal');
var modal_btn = document.getElementById('modal-btn');
var modal_close = document.getElementsByClassName('modal-close')[0];

function modal_open() {
	modal.style.display = "block";
};

modal_close.onclick = function() {
	modal.style.display = "none";
};

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};