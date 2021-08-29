//fixed header
window.addEventListener("scroll", function () {
	if (window.pageYOffset >= 900) {
		header.classList.add("fixed");
	} else {
		header.classList.remove("fixed");
	}
});


//menu
nav_toggle.onclick = function () {
	nav.classList.toggle("active");
};


//Smoth scroll
nav_contact.onclick = function () {
	document.querySelector("#contact").scrollIntoView();
}

nav_blog.onclick = function () {
	document.querySelector("#blog").scrollIntoView();
}

nav_work.onclick = function () {
	document.querySelector("#work").scrollIntoView();
}

nav_service.onclick = function () {
	document.querySelector("#service").scrollIntoView();
}

nav_about.onclick = function () {
	document.querySelector("#about").scrollIntoView();
}


//acordion
accord_header_1.onclick = function () {
	accord_item_1.classList.toggle("active");
};

accord_header_2.onclick = function () {
	accord_item_2.classList.toggle("active");
};

accord_header_3.onclick = function () {
	accord_item_3.classList.toggle("active");
};