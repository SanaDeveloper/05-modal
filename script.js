const modalBtn = document.querySelector('.modal-btn');
console.log(modalBtn);
const closeBtn = document.querySelector('.close-btn');
console.log(closeBtn);
const modal = document.querySelector('.modal-overlay');
console.log(modal);

modalBtn.addEventListener("click", function(){
   modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function(){
	modal.classList.remove("open-modal");
	
});