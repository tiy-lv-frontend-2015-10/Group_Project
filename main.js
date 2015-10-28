$(document).ready(function(){
var menuUrl = "https://json-data.herokuapp.com/restaurant/menu/3";
.ajax({
	URL:menuUrl,
	method: 'get',
	dataType: 'json',
}).then(function(menuData){
	var cater = {
		caterData:caterData
	};
	var caterTemplate = $("#menuTemplate").text();
	var caterHTML = Mustache.render(caterTemplate,caterData);
	$("#caterContainer").html(caterHTML);


});














});