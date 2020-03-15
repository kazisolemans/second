

$(document).ready(function(){

	$('#bar1').barfiller();
	$('#bar2').barfiller();
	$('#bar3').barfiller({ barColor: '#fc6' });
	$('#bar4').barfiller({ barColor: '#900', duration: 3000 });
	$('.venobox').venobox();
});

$('.menu-click').click(function(){
   $('.menu-item').fadeToggle();
});

$('.serv-slide').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
    autoplay:true,
    arrows: false,
});

$('.port-slide').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
    autoplay:true,
    arrows: true,
    prevArrow:'<i class="fas fa-chevron-left port_prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right port_next"></i>',
});


$('.blog_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
    autoplay:true,
    arrows: true,
    prevArrow:'<i class="fas fa-chevron-left blog_prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right blog_next"></i>',
});


$('.slider_test').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
    autoplay:true,
    arrows: true,
    prevArrow:'<i class="fas fa-chevron-left test_prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right test_next"></i>',
});