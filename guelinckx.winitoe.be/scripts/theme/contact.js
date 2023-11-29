$(window).load( function() {
	
	
	
// GMAP	
//---------------------------------------------


	var myMapStyles = [
	  {
    "stylers": [
      { "visibility": "simplified" },
      { "saturation": -100 }
    ]
  }
	];
	
	var text_auto_location = $("#userlocation").data("auto-location-text");
	
	var userlocation;
	//Get latitude and longitude;
	function successFunction(position) {
	    var lat = position.coords.latitude;
	    var long = position.coords.longitude;
	    
	    userlocation = lat+" "+long;
	    
	    $("#userlocation").attr("placeholder", text_auto_location);
	    
	    CalcRoute();
	}
	
	function errorFunction(){
		userlocation = false;
	}
	
	var marker_image = new google.maps.MarkerImage('/images/theme/gmap-icon.png',   
	      new google.maps.Size(45, 60),    
	      new google.maps.Point(0, 0),    
	      new google.maps.Point(22, 60),
	      new google.maps.Size(45, 60));
	
	var myAddresses = [];
	var newadress = {"address": "Salvatorstraat 20, 3500 Hasselt","data": '<span style="white-space: nowrap; height: 18px; line-height: 18px; font-weight: 500;">Jessa Ziekenhuis, campus Salvator Hasselt</span>', options:{icon: marker_image}};
		
	myAddresses.push(newadress);
	
	$("#contactmap").gmap3({
		 marker:{
		    values: myAddresses,
		    options: {
          		draggable: false
          	},
		    events:{
		      mouseover: function(marker, event, context){
		        var map = $(this).gmap3("get"),
		          infowindow = $(this).gmap3({get:{name:"infowindow"}});
		        if (infowindow){
		          infowindow.open(map, marker);
		          infowindow.setContent(context.data);
		        } else {
		          $(this).gmap3({
		            infowindow:{
		              anchor:marker, 
		              options:{content: context.data}
		            }
		          });
		        }
		      },
		      mouseout: function(marker, event, context){
		        var infowindow = $(this).gmap3({get:{name:"infowindow"}});
		        if (infowindow){
		          infowindow.close();
		        }
		      }
		    }
		 },
		 map: {
		    options: {	
		    	zoom: 13,	  
  				styles: myMapStyles,
     			navigationControl: false,
     			scrollwheel: false,
     			streetViewControl: true,
     			disableDefaultUI: false,
     			draggable: true,
		    }  
		 }
	});
	
	
	
	
});