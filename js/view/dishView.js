var DishView = function(container, model,){
	model.addObserver(this);
	this.container = container;
	this.addButton = container.find("#addtoMenubtn");
	this.backButton = container.find("#backBtn");

	var dishInfo = container.find("#dishInfo");
	var dishIngredients = container.find("#dishIngredients");
	var guestCount = container.find("#guestCount");
	var recipePrice = container.find("#totalPrice");

	this.update = function(){
		var guests = model.getNumberOfGuests();
		var dish = model.getDish(model.getId());

		var html = '<h1>' + dish.name + '</h1>' +
			'<img src="images/' + dish.image + '">' +
			'<text>' + dish.description + '</text>';
		var totalPrice = 0;

		var recipe = '<ul>';
		for (var i = 0; i < dish.ingredients.length; i++) {
			recipe += '<li><div class=col-md-4 id="left">' + dish.ingredients[i].quantity*guests + dish.ingredients[i].unit + '</div>'+
				'<div class=col-md-4 id="center">'+ dish.ingredients[i].name + '</div>' +
				'<div class=col-md-4 id="right">SEK ' + dish.ingredients[i].price*guests + '</div></li>';
			totalPrice += dish.ingredients[i].price;
		}
		recipe += '</ul>';

		recipePrice.html('<div class="col-md-4" id="right">' + totalPrice*guests + '</div>');
		dishIngredients.html(recipe);
		dishInfo.html(html);
		guestCount.html(guests);
		

	}
}