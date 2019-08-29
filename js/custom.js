/*WordPress Hack
----------------------------------
Wrap all document in to following.
jQuery(document).ready(function($){...});*/
jQuery(document).ready(function($){
$(document).ready(function(e){
/*Write all code below this*/
/*To add and remove active class on clicked li of navigation.*/
var selector = 'nav li';
$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});
/*END*/

/*To add classes on first and last of all li.*/
$('ul').children('li:first-child').addClass('first');
$('ul').children('li:last-child').addClass('last');
/*END*/

/*Go to top*/
$(window).scroll(function(){
	($(window).scrollTop() > 175 && $(window).width() > 767) ? $('a.gototop').show() : $('a.gototop').hide();
});
$('a.gototop').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
});
/*END-Go to top*/

/*Stop modal video when esc pressed*/
$('body').on('hidden.bs.modal', '.modal', function(){
    $('video').trigger('pause');
});
/*END-Stop modal video when esc pressed*/

/*tooltip*/
$('[data-toggle="tooltip"]').tooltip();
/*End-tooltip*/

/*Menu: clickable parent
if($(window).width() > 767){
	$(".navbar .dropdown").hover(function(){
	$(this).find(".dropdown-menu").first().stop(true, true).delay(250).slideDown();
	}, function(){
	$(this).find(".dropdown-menu").first().stop(true, true).delay(100).slideUp();
	});
	$(".navbar .dropdown > a").click(function(){
	location.href = this.href;
	});
}
/*END-Menu: clickable parent*/

/*slick1*/
$(".slick1").slick({
	speed:300,
	dots:true,
	infinite:true,
	autoplay:true,
	autoplaySpeed:3000,
	slidesToShow:4,
	slidesToScroll:1,
	arrows:false,
    prevArrow:"<button type='button' class='slick-prev'></button>",
    nextArrow:"<button type='button' class='slick-next'></button>",
	variableWidth:true,

	/*
	centerMode:true,
	centerPadding:'60px',
	variableWidth:true,
	adaptiveHeight:true,
	lazyLoad:'ondemand',
	fade:true,
	cssEase:'linear',

	responsive:[
    {
		breakpoint:1024,
		settings:{
			slidesToShow:3,
			slidesToScroll:3,
			infinite:true,
			dots:true
		}
    },
    {
		breakpoint: 600,
			settings: {
			slidesToShow:2,
			slidesToScroll:2,
		}
    },
    {
		breakpoint:480,
			settings:{
			slidesToShow:1,
			slidesToScroll:1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],*/

});
/*End-slick1*/

/*aos*/
AOS.init({
	easing: 'ease-out-back',
	duration: 1000,
});
AOS.init({
    disable: 'mobile'
});
/*End-aos*/

$("#rateYo").rateYo({
	starWidth: "40px",
	normalFill: "#A0A0A0"
});

/*slide menu*/
$(".btn-mob").on("click", function(){
	$(this).toggleClass("act");	
	$(".sld_mnu").toggleClass("acc");	
	$("body").toggleClass("acc_menu");	
});
$(".act").on("click", function(){
	$(this).toggleClass("act");	
	$(".sld_mnu").toggleClass("acc");	
	$("body").toggleClass("acc_menu");	
});
/*End-slide menu end*/

});/* Write all code above this - END - $(document).ready(function(e)*/
});/* END - jQuery(document).ready(function($)*/

$(function () {
	$("#rateYo").rateYo({
		numStars:5,
		rating:4,
		precision:3,
		starWidth:"20px",
		normalFill:"#CCCCCC",
		ratedFill:"#00CF7B",
		spacing:"5px",
	});
});