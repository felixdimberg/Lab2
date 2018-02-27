var DinnerView = function(container, model) {
	model.addObserver(this);

	this.container = container;
	this.button = container.find("#printRecipe");
	var dinnerMenu = container.find("#dinnerMenu");
	var dinnerPrice = container.find("#dinnerPrice");


	this.update = function(){
		var menu = model.getFullMenu();
		var menuPrice = model.getTotalMenuPrice();
		var price = '<div class="col-md-2">' +
			'<div class="vl"><h5>Totalt:</h5><h4>'+menuPrice+' SEK </h4></div>';
		var dinner = "";

		for (i = 0; i < menu.length; i++) {
			var dishPrice = 0;
			for (j = 0; j < menu[i].ingredients.length; j++) {
				dishPrice += menu[i].ingredients[j].price;
			}
			dinner += '<div class="col-md-2 pic">' + 
				'<img src="images/' + menu[i].image + '">' +
				'<text>' + menu[i].name + '</text>' +
				'<h4> '+ dishPrice + ' SEK</h4></div>';
		}
		
		dinnerPrice.html(price);
		dinnerMenu.html(dinner);
	}

}