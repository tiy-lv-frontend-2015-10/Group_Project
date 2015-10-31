$(document).ready(function(){
	

	var newsUrl = 'https://json-data.herokuapp.com/restaurant/news/1';
	$.ajax({
		url:newsUrl,
		method: 'get',
		dataType: 'json',
	}).then(function(news){
		
		var newsGet = {
			news:news
		};



		var newsTemplate = $("#newsTemplate").text();
		var newsHTML = Mustache.render(newsTemplate,newsGet);
		$("#newsContainer").html(newsHTML);
		console.log(newsGet);


});


	var menuUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';
	$.ajax({
		url:menuUrl,
		method: 'get',
		dataType: 'json',
	}).then(function(menu){
		
		var beer=menu.Beer.map(function(obj){
			return {
				"id": obj.id,
				"item": obj.item,
				"price":obj.price,
				"style": obj.style,
				"abv": obj.abv,
				"description": obj.description,
				"allergies": obj.allergies,
				"favorite": obj.favorite,
				"bottle": obj.bottle,
				"draught": obj.draught,
			};

		});
	

		var beerGet = {
			beer:beer
		};

		var beerTemplate = $("#beerTemplate").text();
		var beerHTML = Mustache.render(beerTemplate,beerGet);
		$("#beerContainer").html(beerHTML);
		



			var entree=menu.entrees.map(function(obj){
				return {
					"id": obj.id,
					"item": obj.item,
					"price":obj.price,
					"description": obj.description,
					"allergies": obj.allergies,
					"favorite": obj.favorite,
					"spicy": obj.spicy,
					"vegan": obj.vegan,
					};
					
				});

		var entreeGet = {
			entree:entree
		};

		var entreeTemplate = $("#entreeTemplate").text();
		var entreeHTML = Mustache.render(entreeTemplate,entreeGet);
		$("#entreeContainer").html(entreeHTML);


		

	});

	var specialUrl = 'https://json-data.herokuapp.com/restaurant/special/1';
	$.ajax({
		url:specialUrl,
		method: 'get',
		dataType: 'json',
	}).then(function(special){
		
		var specialGet= {special:special};



	var specialTemplate = $("#specialTemplate").text();
		var specialHTML = Mustache.render(specialTemplate,specialGet);
		$("#lastMeal").html(specialHTML);
		

});


 


 $("#reservationLi").on("click", function(){
 	$("#reservationForm").toggleClass("hidden");
 	$("#masterDiv").toggleClass("blur");

 });
	  
	
var appetizerUrl = "https://json-data.herokuapp.com/restaurant/menu/1";

	$.ajax({
		url:appetizerUrl,
		method: 'get',
		dataType: 'json',
	}).then(function(appsides){
		
		var appetizer=appsides.appetizers.map(function(obj){
			return {
				"id": obj.id,
				"item": obj.item,
				"price":obj.price,
				"description":obj.description,
				"allergies":obj.allergies,
				"favorite":obj.favorite,
				"spicy":obj.spicy,
				"vegan":obj.vegan
			};
		});
	
		appetizerGet={
			appetizer:appetizer
		};

		var appetizerTemplate= $("#appetizerTemplate").text();
		var appetizerHTML = Mustache.render(appetizerTemplate,appetizerGet);
		$("#appetizerContainer").html(appetizerHTML);
		console.log(appetizerGet);

});


var sidesUrl = "https://json-data.herokuapp.com/restaurant/menu/1";

	$.ajax({
		url:sidesUrl,
		method:'get',
		dataType:'json',
	}).then(function(regSides){
		var sides = regSides.sides.map(function(obj){
			return {
				"id": obj.id,
				"item": obj.item,
				"price":obj.price,
				"description":obj.description,
				"allergies":obj.allergies,
				"favorite":obj.favorite,
				"spicy":obj.spicy,
				"vegan":obj.vegan
					};
		});
	

	sidesGet= {
		sides:sides
	};

	var sidesTemplate = $("#sidesTemplate").text();
	var sidesHTML = Mustache.render(sidesTemplate,sidesGet);
	$("#sidesContainer").html(sidesHTML);

});


 $("#appetizerBtn").on("click", function(){
 	$("#appAccord").toggleClass("displayBlock");
 	clear("#beerAccord");
 	clear("#carteAccord");
 	clear("#entreeAccord");

 });

  $("#entreeBtn").on("click", function(){
 	$("#entreeAccord").toggleClass("displayBlock");
 	clear("#appAccord");
 	clear("#beerAccord");
 	clear("#carteAccord");

 });

   $("#carteBtn").on("click", function(){
 	$("#carteAccord").toggleClass("displayBlock");
 	clear("#entreeAccord");
 	clear("#appAccord");
 	clear("#beerAccord");

 });


 $("#beerBtn").on("click", function(){
 	$("#beerAccord").toggleClass("displayBlock");
 	clear("#entreeAccord");
 	clear("#appAccord");
 	clear("#carteAccord");
 	

 });




 function clear(clear) {
 	$(clear).removeClass("displayBlock");
}





















});








