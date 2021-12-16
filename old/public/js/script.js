const modal_btn = document.getElementById('modal-btn');
// const modal_close = document.getElementById('modal-close');
let modal

function modal_open(name) {
	modal = document.getElementById(name)

	modal.style.display = "block";
};

// modal_close.onclick = () => {
// 	modal.style.display = "none";
// };

window.onclick = (evt) => {
	if (evt.target == modal) {
		modal.style.display = "none";
	}
};