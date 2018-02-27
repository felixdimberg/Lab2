var ChooseDishView = function(container, model) {
	model.addObserver(this);
	this.container = container;

	var dishPlace = container.find("#dishes");
	
	this.update = function(){
		var dishPlace = container.find("#dishes");
		var dishes = model.getAllDishes(model.getType(), model.getFilter());
		var dishBox = "";
		for (var i = 0; i < dishes.length; i++){
			dishBox += '<div class="col-md-2 pic" id='+ dishes[i].id+'>'+
			'<img src="images/'+dishes[i].image+'">'+
			'<text>'+dishes[i].name+'</text>'+
			'</div>';
		}
		dishPlace.html(dishBox);
		this.dish = container.find('span div');
	}

	var dishes = model.getAllDishes(model.getType(), model.getFilter());
	var dishBox = "";
	for (var i = 0; i < dishes.length; i++){
		dishBox += '<div class="col-md-2 pic" id='+ dishes[i].id+'>'+
		'<img src="images/'+dishes[i].image+'">'+
		'<text>'+dishes[i].name+'</text>'+
		'</div>';
	}
	dishPlace.html(dishBox);

	this.dish = container.find('span div');
}