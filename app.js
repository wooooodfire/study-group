/* Open when someone clicks on the span element */
const openNav = () => {
	document.getElementById('nav-mobile').style.width = '100%';
};

/* Close when someone clicks on the "x" symbol inside the overlay */
const closeNav = () => {
	document.getElementById('nav-mobile').style.width = '0%';
};

const title = document.getElementsByClassName('content-block-title');

const navClick = (index) => {
	title[index].scrollIntoView();
	document.getElementById('nav-mobile').style.width = '0%';
};

// TOP BUTTON

//Get the button:
mybutton = document.getElementById('toTop');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => scrollFunction();

const scrollFunction = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = 'block';
	} else {
		mybutton.style.display = 'none';
	}
};

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
