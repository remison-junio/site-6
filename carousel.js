//Carousel seção 3(s-3)

	const owl = $('.owl-carousel.s-3')
	owl.owlCarousel({
		loop:true,
		margin:5,
		nav:false,
		dots:false,
		slideTransition: 'linear',
		responsive:{
	        0:{
	            items:1
	        },
	        690:{
	            items:3
	        },
	        1000:{
	        	items:4
	        },
	        1400:{
	        	items:5
	        }
	    }
	})

	$('.btn-esquerdo').click(()=> {
		owl.trigger('prev.owl.carousel');
	})

	$('.btn-direito').click(()=> {
		owl.trigger('next.owl.carousel');
	});

//Carousel seção 4(s-4)

	$('.owl-carousel.s-4').owlCarousel({
	    loop:true,
	    nav:false,
	    items:1
	})