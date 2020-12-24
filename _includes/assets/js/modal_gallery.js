
// Get the gallery by id
const gallery = document.getElementById('gallery');
const numberOfImage = document.getElementsByClassName('thumbnails').length - 1;
var currentImage;
var modalIsOpen = false;

//this is the modal window
const modal = document.getElementById('modal_window');
//those are the modal image elements
const imageContainer = document.getElementById('modal_image_container');
const image = document.getElementById('modal_image');

//those are the title bar elements
const imageTitle = document.getElementById('image_title');
const PurchaseLinkText = document.getElementById('purchase_link_text');
const PurchaseLink = document.getElementById('purchase_link');

//those are the control bar elements
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const closeButton = document.getElementById('close');

//those are the contextual menu elements
const menu = document.getElementById("contextual_menu");
const menu_next = document.getElementById('menu_next');
const menu_previous = document.getElementById('menu_previous');
const menu_close = document.getElementById('menu_close');
var menuIsVisible = false;

// loader spinner

const loader = document.getElementById('spinner');

function spinIt() {
	loader.style.height = "100%";
	loader.style.width = "100%";
}
//
image.onload = function() {
	loader.style.height = "0";
	loader.style.width = "0";
};

// Modal

function openModalGallery(imageIDNumber) {
	//looking back , i could have just used an array instead of this id system, oh well...
	modalIsOpen = true;
	//check if image id is within bound, wrap around if not
	imageIDNumber = parseInt(imageIDNumber);
	if ( imageIDNumber == 0 ) { imageIDNumber = numberOfImage; }
	if ( imageIDNumber > numberOfImage ) { imageIDNumber = 1; }
	//get the thumbnail by id
	let img;
	img = document.getElementById(imageIDNumber);
	//start spinner
	spinIt();
	//upadte title bar
	imageTitle.innerHTML = img.dataset.title;
	PurchaseLink.href = img.dataset.href;

	//change image, open the modal
	modal.style.display = "flex";
	image.src = img.src.replace("/thumbnails", "/larges");
	currentImage = imageIDNumber;

	//prevent scrolling on modal
	document.body.style.overflow = 'hidden';
}

//close modal
function closeModdalGallery(){
	modal.style.display = "none";
	modalIsOpen = false;
	document.body.style.removeProperty('overflow');
}

//prev and next
function nextModal(n) {
	currentImage += n;
	openModalGallery(currentImage);
}

//custom right click menu

function hideMenu(){
	if (menuIsVisible){
		menu.style.display = 'none';
		menuIsVisible = false;
	}
};

function showMenu( top, left ){
	menu.style.top = top + 'px';
	menu.style.left = left + 'px';
	menu.style.display = 'flex';
	menuIsVisible = true;
};


// EVENTLISTENER

// FOR THE MENU

addEventListener( 'click' , function(event) {
	hideMenu();
});
addEventListener('contextmenu',function(event){
	if (modalIsOpen){
		let mouseX = event.clientX;
		let mouseY = event.clientY;
		event.preventDefault();
		hideMenu();
		showMenu(mouseY , mouseX);
	}
});

// MENU CONTROLS
menu_previous.addEventListener( 'click' , function(event) {
	nextModal(-1);
});
menu_next.addEventListener( 'click' , function(event) {
	nextModal(+1);
});
menu_close.addEventListener( 'click' , function(event) {
	closeModdalGallery()
});

// MODAL CONTROLS

closeButton.addEventListener("click", function(){
	modal.style.display = "none";
	modalIsOpen = false;document.body.style.removeProperty('overflow');

}); 
previous.addEventListener("click", function(){
	nextModal(-1);
}); 
next.addEventListener("click", function(){
	nextModal(+1);
}); 
imageContainer.addEventListener("click", function(){
	if (!menuIsVisible){
		closeModdalGallery()
	}
});