$(document).ready(function(){
	var menuUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';
	$.ajax({
		url:menuUrl,
		method: 'get',
		dataType: 'json',
	}).then(function(beerData){
		
		var test=beerData.Beer.map(function(obj){
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
				"draught": obj.draught
			};
		});


		var beerGet = {
			test:test
		};

		var beerTemplate = $("#beerTemplate").text();
		var beerHTML = Mustache.render(beerTemplate,beerGet);
		$("#beerContainer").html(beerHTML);
		console.log(test);

	});


	

	









});








