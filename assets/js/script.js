// const toggle = document.querySelector('.nav-toggle');
// const menu = document.querySelector('.menu-nav');
// toggle.addEventListener('click', ()=>{
// 	menu.classList.toggle('navmenu-toggle');
// });

// let progress = document.getElementById('progress');
// let totalheight = document.body.scrollHeight - window.innerHeight;
// window.onscroll = ()=>{
// 	let progressheight = (window.pageYOffset/totalheight)*100;
// 	progress.style.height = progressheight + "%";
// } 




//  window.addEventListener("scroll", navscroll);

//  function navscroll(){
//    	let nav = document.querySelector("nav");
//     	nav.classList.toggle("sticky", window.scrollY > 90);
//  }

//  window.addEventListener('scroll', scrolls);

//  function scrolls(){
//  	var scrols = document.querySelectorAll(".scrol");
//  	for(var i = 0; i < scrols.length; i++ ){
//  		var tinggi = window.innerHeight;
//  		var scrolatas = scrols[i].getBoundingClientRect().top;
//  		var scrolpoint = 50;

//  		if(scrolatas < tinggi - scrolpoint){
//  			scrols[i].classList.add("aktiv");
//  		}else{
//  			scrols[i].classList.remove("aktiv");
//  		}
 		
//  	}
//  }

const navBar = document.querySelector('.navbar')
const togle = document.querySelector('.nav-togle')
togle.addEventListener('click', ()=>{
	// alert('You Are Happy ??')
   navBar.classList.toggle('navbar-togle')
})

window.addEventListener("scroll", navscroll);

function navscroll(){
	let nav = document.querySelector("nav");
	nav.classList.toggle("sticky", window.scrollY > 90);
}

const openModal = document.querySelector('#open-modal');
const modalOverlay = document.querySelector('.modal-overlay');
// const modalLah = document.querySelector('.modal');

openModal.addEventListener('click', ()=>{
	modalOverlay.style.display = 'flex';
  
});

const todoDown = document.getElementById('tododown')
const todoClass = document.querySelector('.todo')
const el = document.querySelector('.bi bi-chevron-down');
const showDown = ()=>{
	todoClass.classList.toggle('down');
	
	
}
todoDown.addEventListener('click',showDown)

