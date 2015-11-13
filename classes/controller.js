


$().ready(function(e) {
	
	
	/* инициализируем себя*/
	
	var myPlayerParams = {
		name : 'Великий я',
		health : 31
	};
	var myPlayer = new Player(myPlayerParams);
	
	
	/* инициализируем врага*/
	
	var enemyPlayerParams = {
		name : 'Гадкий враг',
		health : 27
	};
	var enemyPlayer = new Player(enemyPlayerParams);
	
	
	/* инициализируем игру*/
	
	var gameParams = {
		me : myPlayer,
		enemy : enemyPlayer
	};
	var game = new Game(gameParams)
	
	console.log(game);
});