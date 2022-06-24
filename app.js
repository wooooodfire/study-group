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
