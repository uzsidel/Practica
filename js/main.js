$(document).ready(function(){
//Slider
if (window.location.href.indexOf('index') > -1) {
	$('.bxslider').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200
    });
}
//Post
if (window.location.href.indexOf('index') > -1) {
	var posts=[
		{
			title: 'Pueba de titulo',
			date: 'Publicado el dia '+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
			content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
		{
			title: 'Pueba de titulo',
			date: 'Publicado el dia '+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
			content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		},
		{
			title: 'Pueba de titulo',
			date: 'Publicado el dia '+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
			content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
		}
	];
	console.log(posts);
	posts.forEach((item, index)=>{
		var post=`
			<article class="post">
				<H2>${item.title}</H2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="" class="button-more">Leer mas</a>
			</article>		
		`;
	$("#post").append(post); 	
	}); 
//Cambio de tema
	var style=$("#theme");
	$("#to-green").click(function(){
		style.attr("href","css/green.css");
	});
	$("#to-red").click(function(){
		style.attr("href","css/red.css");
	});
	$("#to-blue").click(function(){
		style.attr("href","css/blue.css");
	});	
} 
//scroll arriba
$(".up").click(function(e){
	e.preventDefault();//Cacha el error
	$('html,body').animate({
		scrollTop:0
	},500);
	return false;
});	
//Login
$("#login form").submit(function(){
	var name = $("#name").val();
	localStorage.setItem("name",name);
});
var name = localStorage.getItem("name");

if (name != null && name != "undefined") {	
	var parrafo = $("#about p");
	parrafo.html("Bienvenido: "+ name);
	parrafo.append(" <a href='#' id='logout'>Cerrar Session</a>");
	$("#login").hide();

	$("#logout").click(function(){
		localStorage.clear();
		location.reload();
	});
}
//Acordeon
if (window.location.href.indexOf('about') > -1) {
	$("#acordeon").accordion();
}
//Reloj
if (window.location.href.indexOf('reloj') > -1) {
	setInterval(function(){
		var reloj = moment().format('h:mm:ss');
		$("#reloj").html(reloj);	
	}, 1000);
}
//Validacion	
if (window.location.href.indexOf('contac') > -1) {
	$("form input[name='date']").datepicker({
		dateFormat : 'dd-mm-yy',
	});
	$.validate({
    	lang: 'es',
    	errorMessagePosition: 'top',//Envia el mensaje de error a la parte superior
    	scrollToTopOnError: true
  	});
}	  	
});
