var SidebarView = function (container, model) {
	model.addObserver(this);
	this.container = container;
	this.guestCount = container.find("#numberOfGuests");
	this.button = container.find("#confirmMenuBtn");
	var totalCost = container.find("#totalCost");
	var pending = container.find("#pendingMenu");

	this.update = function(){
		var menu = model.getFullMenu();
		var dishes = "";
		for (var i = 0; i < menu.length; i++){
			var price = 0;
			for (j = 0; j < menu[i].ingredients.length; j++) {
				price += menu[i].ingredients[j].price;
			}
			dishes += '<div class="col-md-12" id="pendingDishes"><div id="sidebarLeft" class="col-md-10">' + menu[i].name + '</div><div id="sidebarRight" class="col-md-2">' + price + '</div></div>';
		}
		pending.html(dishes);
		totalCost.html(model.getTotalMenuPrice());
	}
	totalCost.html(model.getTotalMenuPrice());
}
 
