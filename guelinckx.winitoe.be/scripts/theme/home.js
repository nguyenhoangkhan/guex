
      
$(function(){
		
	var base_url = $("body").data("base-url-short");

	
	var screenwidth = $(window).width();
	var screenheight = $(window).height();	
	
// sliders

	var prev = $(".cases-container .prev");
	var next = $(".cases-container .next");
	
	var cases_slider = $("#cases-slider").tosrus({
		infinite: false,
		drag: true,
		buttons: {
	      prev: prev,
	      next: next,
	    },
	    pagination: {
		    add: false,
	    },
	    /*slides: {
		    scale: "fit"
	    },*/
	    autoplay: {
		    play: true,
		    timeout: 8000,
	    }
	});
	
	var news_slider = $("#news-slider").tosrus({
		infinite: true,
		drag: true,
		effect: "fade",
		buttons: {
	      prev: false,
	      next: false,
	    },
	    pagination: {
		    add: false,
	    },
	    /*slides: {
		    scale: "fit"
	    },*/
	    autoplay: {
		    play: true,
		    timeout: 6000,
	    }
	});

});
