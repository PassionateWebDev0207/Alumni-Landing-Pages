import 'bootstrap'
import './sass/main.scss'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop:true,
		margin: 30,
		autoplay: true,
		autoplayHoverPause: true,
		autoWidth: true,
		items: 7,
	});
	$("#carousel-next").click(function(){
		owl.trigger('next.owl.carousel');
	})
	$("#carousel-prev").click(function(){
		owl.trigger('prev.owl.carousel');
	})

	//navbar effect
	window.onscroll = function() {
		showStickyMenu();
	};

	let globalFlag = window.innerWidth > 991 ? true : false;
	window.onresize = function() {
		if (window.innerWidth > 991 && globalFlag == false) {
			showStickyMenu();
			globalFlag = true;
		}
		if (window.innerWidth < 992 && globalFlag == true) {
			showStickyMenu();
			globalFlag = false;
		}
	};

	function showStickyMenu() {
		let navbar = document.getElementById("originnav");
		let sticky = 0;
		if (navbar) {
			sticky = navbar.offsetTop;
		}
		if (sticky == 0) {
			sticky = 100;
		}
		if (window.pageYOffset >= sticky /*&& window.innerWidth > 991*/) {
			document.getElementById("scrollnav").style.visibility = 'visible';
			document.getElementById("scrollnav").style.zIndex = '999999';
		} else {
			document.getElementById("scrollnav").style.visibility = 'hidden';
			document.getElementById("scrollnav").style.zIndex = '-9';
		}
	}
})
