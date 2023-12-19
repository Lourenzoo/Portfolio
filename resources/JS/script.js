document.addEventListener("DOMContentLoaded", function(){

	// event listener for button in mobile version
	document.getElementById("burger").addEventListener("click", function () {
		document.querySelector("header").classList.toggle("open");
	});

	document.getElementById("scroll_up").addEventListener("click", function () {
		// alert("hello world");
		// window.scrollTo(1000, 0);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});




})