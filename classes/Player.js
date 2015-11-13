
/*
	Класс Player
*/

Player = function(params)
{
	// constuctor
	this.name = params.name;
	this.health = params.health;
};
extend(Player,PlayerInterface);

Player.prototype = 
{
	/*
		public properties
	*/
	
	// название карты
	name: '',
	
	// здоровье карты
	health: 0,
	
	// карты в колоде
	cardsInDeck: [],
	
	// карты в руке
	cardsInHand: [],
	
	// карты на столе
	cardsOnTable: [],
	
	
	/*
		public methods
	*/
	
	// игрок начинает ход
	turnStart : function()
	{
		this._onTurnStart();
		// some code here
	},
	
	// игрок заканчивает ход
	turnEnd : function()
	{
		this._onTurnEnd();
		// some code here
	},
	
	// игрок берет карту из колоды
	pullCard : function()
	{
		this._onPullCard();
		// some code here
	},
	
	
	
	/*
		public events
	*/
	
	// срабатывает, когда игрок начинает ход
	_onTurnStart : function()
	{
		// some code here	
	},
	
	// срабатывает, когда игрок заканчивает ход
	_onTurnEnd : function()
	{
		// some code here	
	},
	
	// срабатывает, когда игрок берет карту из колоды
	_onPullCard : function()
	{
		// some code here	
	},
	
};