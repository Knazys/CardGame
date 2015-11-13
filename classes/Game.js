
/*
	Класс Game
*/

Game = function(params)
{
	// constuctor
	console.log(1);
	this.me = params.me;
	this.enemy = params.enemy;
	
	this.spawnMe();
	this.spawnEnemy();
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
	spawnMe : function()
	{
		var myFrame = $('#my-frame');
		myFrame.html('<div class="player-title">'+this.me.name+'</div>');
		// кэшируем объект со здоровьем
		this.myHealthFrame = $('<div>').addClass('player-health').html(this.me.health);
		
		myFrame.append(this.myHealthFrame);
	},
	
	// добавляем инфо об игроке (враге) на экран
	spawnEnemy : function()
	{
		var enemyFrame = $('#enemy-frame');
		enemyFrame.html('<div class="player-title">'+this.enemy.name+'</div>');
		// кэшируем объект со здоровьем
		this.enemyHealthFrame = $('<div>').addClass('player-health').html(this.enemy.health);
		
		enemyFrame.append(this.enemyHealthFrame);
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