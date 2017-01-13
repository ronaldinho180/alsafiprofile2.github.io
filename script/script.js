$(document).ready(function() {
	
	function adjustStyle(width) {
    	width = parseInt(width);
    	if (width <= 7900) {
        	$('.pics div').css({'width': width / 4 - 0.1});
			$('.heading p').css({'margin-left': width / 4 + 40});
			$('.heading h1').css({'margin-left': width / 4 - 100});
		}
	}

	$(function() {
    	adjustStyle($(this).width());
    	$(window).resize(function() {
        	adjustStyle($(this).width());
    	});
	});
	
	new Photostack( document.getElementById( 'photostack-1' ), {
		callback : function( item ) {
		//console.log(item)
		}
	});
	
	$('#contact').hide();
	
	$('.nav-list li').eq(0).click(function(e) {
    	$.scrollTo(0,'slow');
	});
  
  	$('.nav-list li').eq(1).click(function(e) {
    	$.scrollTo('#about','slow');
  	});
  
  	$('.nav-list li').eq(2).click(function(e) {
    	$.scrollTo('#portfolio','slow');
  	});
  
  	$('.nav-list li').eq(3).click(function(e) {
    	$.scrollTo('#services','slow');
  	});
  
	$('.nav-list li').eq(4).click(function(e) {
		$.scrollTo('#contact','slow');
  	});
  
  	$(window).bind('scroll', function() {
		var navHeight = $( window ).height() - 70;
		if ($(window).scrollTop() > navHeight) {
			$('#navbar').addClass('fixed');
		}
		else {
			$('#navbar').removeClass('fixed');
		}
	});
	
	
	$('.show').click(function(e){
		e.preventDefault();
		$('#contact').stop().slideToggle('easeOutBounce');
	});
	
	
	$('.nav-list a').click(function(){
		$('a').removeClass('active');
		$(this).toggleClass('active');
	});
	
	$('.butn[value="Clear"]').click(function() {
        $('textarea, input').val('');
    });

	
	

	$('.butn[value="Send"]').click(function(e){
		e.preventDefault();
		if($('.input-name').val('')){
			$('.input-name').addClass('error');
		}
		else{
			$('.input-name').removeClass('error');
		}
	});
	
	$('.nba').hover(
		function (){
			$(this).attr('src', 'images/nbahover.png');
		},
		function(){
			$(this).attr('src', 'images/NBAlogoGREY.png');
		}
	);
	
	$('.html5').hover(
		function (){
			$(this).attr('src', 'images/htmlhover.png');
		},
		function(){
			$(this).attr('src', 'images/logohtml5GREY.png');
		}
	);
	
	$('.css3').hover(
		function (){
			$(this).attr('src', 'images/csshover.png');
		},
		function(){
			$(this).attr('src', 'images/logocss3GREY.png');
		}
	);
	
	$('.jquery').hover(
		function (){
			$(this).attr('src', 'images/jqueryhover.png');
		},
		function(){
			$(this).attr('src', 'images/jqueryGREY.png');
		}
	);
	
	$('.fox').hover(
		function (){
			$(this).attr('src', 'images/Kojimahover.png');
		},
		function(){
			$(this).attr('src', 'images/KojimalogoGREY.png');
		}
	);
	
	$('.bat').hover(
		function (){
			$(this).attr('src', 'images/batmanhover.png');
		},
		function(){
			$(this).attr('src', 'images/batmanlogoGERY.png');
		}
	);
	
	$( '#fc-slideshow' ).flipshow({
		speed: 1000
	});
	
	$('.fade').slick({
  		dots: true,
  		infinite: true,
  		speed: 500,
  		fade: true,
  		cssEase: 'linear'
	});
});