document.addEventListener("DOMContentLoaded", function(){

	// event listener for button in mobile version
	document.getElementById("burger").addEventListener("click", function () {
		document.querySelector("header").classList.toggle("open");
	});

	// event listener for scroll-up button 
	document.getElementById("scroll_up").addEventListener("click", function () {
		// alert("hello world");
		// window.scrollTo(1000, 0);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});

	// events listeners for image border color changing
	const setBorder = () => {
		const randomColor = Math.floor(Math.random()*16777215).toString(16);
		document.getElementById("hero_img").style.borderColor =  "#" + randomColor;
	}

	document.getElementById("hero_img").addEventListener("mouseenter", setBorder);
		
	document.getElementById("hero_img").addEventListener("mousewheel", setBorder);

	// return color back
	document.getElementById("hero_img").addEventListener("mouseleave", function ( ){
		document.getElementById("hero_img").style.borderColor ="rgba(131,8,8,1)";
	});



})