!(function($) {
	"use strict";

// Preloader Timeout
setTimeout(function(){
	$('.loader-wrap').fadeToggle();
   }, 2500);

// Sticky Navbar

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("sticky-nav");
function myFunction() {
  if (window.pageYOffset >= 60) {
	navbar.classList.add("sticky")
  } else {
	navbar.classList.remove("sticky");
  }
}

//   VenoBox 
  $(document).ready(function() {
	$('.venobox').venobox({
		'share': false
	});
	});

//   Owl Carousel
  $("#main-banner-carousel").owlCarousel({      
	pagination : false,
	loop:true,
	dots:false,
	nav:true,
	autoplay: true,
	smartSpeed: 1500,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	navText : ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		500:{
			items:1
		},
		1000:{
			items:1
		}
	}
  });

  $("#items-carousel").owlCarousel({      
	pagination : false,
	loop:true,
	dots:false,
	nav:false,
	autoplay: true,
	smartSpeed: 1500,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:3
		},
		500:{
			items:5
		},
		800:{
			items:6
		},
		900:{
			items:7
		},
		1000:{
			items:8
		}
	}
  });

  $("#testimonial-carousel").owlCarousel({      
	pagination : false,
	loop:true,
	dots:false,
	nav:false,
	margin: 20,
	autoplay: true,
	smartSpeed: 1500,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
		768:{
			items:2
		},
		991:{
			items:1
		}
	}
  });
})(jQuery);