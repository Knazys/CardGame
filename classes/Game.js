
/*
	Класс Game
*/

Game = function(params)
{
	// constuctor
	console.log(1);
	this.me = params.me;
	this.enemy = params.enemy;
	
	this.me.spawn('#my-frame');
	this.enemy.spawn('#enemy-frame');

	this.me.pullCards(4);
	this.enemy.pullCards(3);
}
//extend(Player,PlayerInterface);

Game.prototype = 
{
	/*
		public properties
	*/
	
	// объект игрока - меня
	me: null,
	
	// объект со здоровьем игрока - меня
	myHealthFrame: null,
	
	// объект игрока - врага
	enemy: null,
	
	// объект со здоровьем игрока -врага
	enemyHealthFrame: null,
	
	
	
	/*
		public methods
	*/
	
	// добавляем инфо об игроке (себе) на экран
	qw2e : function()
	{
	},
	
	
	/*
		public events
	*/
	
	// срабатывает, когда игрок начинает ход
	_onTurnStart : function()
	{
		// some code here	
	},
	
};