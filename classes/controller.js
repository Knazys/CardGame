
var game = null;

$().ready(function(e) {

    /* инициализируем карты*/

    var cardParams1 = {
        name : 'Elvis',
        attack: 6,
        health: 4
    }
    var card1 = new Card(cardParams1);

    var cardParams2 = {
        name: 'Vadya The Destroyer',
        attack: 90,
        health: 5
    }
    var card2 = new Card(cardParams2);

	
	/* инициализируем себя*/
	
	var myPlayerParams = {
		name : 'Великий я',
		health: 31,
		$handFrame: '#hand-my-cards',
		cardsInDeck: [card1, card2]
	};
	var myPlayer = new Player(myPlayerParams);
	
	
	/* инициализируем врага*/
	
	var enemyPlayerParams = {
		name : 'Гадкий враг',
		health: 27,
		$handFrame: '#hand-enemy-cards'
	};
	var enemyPlayer = new Player(enemyPlayerParams);
	
	
	/* инициализируем игру*/
	
	var gameParams = {
		me : myPlayer,
		enemy : enemyPlayer
	};
	game = new Game(gameParams);
	
	console.log(game);
});