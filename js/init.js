$(document).ready(function(){
	adjustSize();
  	absoluteCenter();


// wow.js animate.css efectos
  wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
  )
wow.init();

$(".hamburger").click(function(e) {
  		e.preventDefault();
  		$(this).toggleClass( "open" );
  		$('.menu-nav').toggleClass( "open" );
	   });

	   
//slider home
    if( $(".slider-home").length > 0 ){
		$('.slider-home').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:false,
		    dots:true,
			  autoplay: true,
        autoplayTimeout: 12000,
		    animateOut: 'slideOutLeft',
        slideSpeed: 8000,
    		//animateIn: 'slideInLeft',
    		//smartSpeed:52000,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
	                dots:true,
	                nav:false,
		            autoplay: true
		        },
            768:{
                items:1,
                dots:true,
                nav:false,
                autoplay: true
            },
		        1024:{
		            items:1,
	                dots:true,
	                nav:false,
		            autoplay: true
		        }
		    }
		});
	}


// paralax
	$('#prlx-nosotros').parallax("50%", 0.05);


// FILTROS DEL PORTFOLIO
$(function(){
  $('#portfolio-items').mixItUp({
  	animation: {
		effects: 'fade',
		perspectiveOrigin: '0 0',
		perspectiveDistance: '10px',
		duration: 600	
	}
  });
});


});

//***************************

 $(window).resize(function() {
	adjustSize();
	absoluteCenter();

});
//******************************


var element = 50;
$(window).scroll(function(){
  var y = $(window).scrollTop();
    if (y >= element){
     $(".styk").addClass("open");
     $(".top").addClass("display");
     $("#detalleHead").addClass("disHead");
    }else if (y < element){
     $(".styk").removeClass("open");
     $(".top").removeClass("display");
     $("#detalleHead").removeClass("disHead");
    }
});

//detecto tamaño de pantalla y doy estilo al slider-home segun el caso
function adjustSize(){
       var windowWidth = $(window).width(); 
       var windowHeight = $(window).height() - 80;      
       if (windowWidth>1023){                   
           $( ".slider-home .slide" ).css({
				"height": windowHeight
		  	});                            
       }else if (windowWidth>700 && windowWidth<=780){ 
       		$( ".slider-home .slide" ).css({
				"height": "540px"
		  	}); 
               
       }else if (windowWidth<=600){ 
             $( ".slider-home .slide" ).css({
				"height": "400px"
		  	});   
       }                
}

//script para centrar contenido en vertical
var absoluteCenter = function(){
    $('.absoluteCenter', $("body")).each(function(i) {      
        var nodo = $(this);
        var parent = nodo.data("parent");
        var height_children = nodo.height();
        var height_parent = $('.' + parent).height();   
        var top = (height_parent - height_children) / 2;
        nodo.css("margin-top", top);
    }); 
}


$(document).on("scroll", onScroll);
    $('a.princ[href^="#"]').on('click', function (e) {
                e.preventDefault();
                $(document).off("scroll");

                $('a.princ').each(function () {
                    $(this).removeClass('menu-active');
                })
                $(this).addClass('menu-active');
});

            function onScroll(event){
                var scrollPosition = $(document).scrollTop();
                $('a.princ').each(function () {
                    var currentLink = $(this);
                    var refElement = $(currentLink.attr("href"));
                    if (refElement.position().top - 600 <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                        $('a.princ').removeClass("menu-active");
                        currentLink.addClass("menu-active");
                    }
                    else{
                        currentLink.removeClass("menu-active");
                    }
                });
            }
            

$("#btnEstudio").click(function() { 
	   $(".menu-nav").removeClass("open");
	   $(".hamburger").removeClass("open");
});



		

