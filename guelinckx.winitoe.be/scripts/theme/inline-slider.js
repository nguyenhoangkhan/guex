
      
$(function(){
	
// slider
	
	var inline_slider = $(".inline-slider").tosrus({
		infinite: false,
		drag: true,
		buttons: {
	      prev: true,
	      next: true,
	    },
	    pagination: {
		    add: false,
	    },
	    slides: {
		    scale: "fit"
	    },
	    autoplay: {
		    play: false,
	    }
	});
});
