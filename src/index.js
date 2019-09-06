import 'bootstrap'
import './sass/main.scss'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop:true,
		margin:10,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:5
			},
			1200:{
				items:10
			}
		}
	});
	$("#carousel-next").click(function(){
		owl.trigger('next.owl.carousel');
	})
	$("#carousel-prev").click(function(){
		owl.trigger('prev.owl.carousel');
	})
})
