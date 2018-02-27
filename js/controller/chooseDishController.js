var ChooseDishController = function(view,model,app){
	view.dish.click(function(){
		var dishId = Number($(this).attr('id'));
		model.setId(dishId);
		app.showDishView();
	})
}