$('.speaker_carousel').owlCarousel({
    loop:true,
    margin:10,
	autoplay: true,
    autoplayTimeout: 3000,
    nav:true,
    touchDrag: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('.sponsor_carousel').owlCarousel({
    loop:true,
    margin:10,
	autoplay: true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

