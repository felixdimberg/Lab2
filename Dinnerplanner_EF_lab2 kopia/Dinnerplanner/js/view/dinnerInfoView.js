var DinnerInfoView = function(container, model){
	model.addObserver(this);
	this.container = container;
	var dishInfo = container.find("#dishInfo");

	this.update = function(){
		var menu = model.getFullMenu();
		var dishes = "";

		for (var i = 0; i < menu.length; i++){ 
			dishes +='<div class="col-md-12" id="preparations"><div class="col-md-2"><img src="images/' + menu[i].image + '"></div>' + 
					'<div class=col-md-4><h4>' + menu[i].name + '</h4><text>' + menu[i].description + '</text></div>' +
					'<div class="col-md-4 col-md-offset-1" ><h4>Preparations</h4><text>' + menu[i].description + '</text></div></div>';
		}

		dishInfo.html(dishes);
	}

}