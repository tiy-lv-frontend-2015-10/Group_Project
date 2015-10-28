$(document).ready(function(){
	var menuUrl = 'https://json-data.herokuapp.com/restaurant/menu/3';
	$.ajax({
		url:menuUrl,
		method: 'get',
		dataType: 'json',
	}).then(function(beerData){
		
		var test=beerData.Beer.map(function(obj){
			return {
				price:obj.price
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








