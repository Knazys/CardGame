
/*
	Интерфейст класса Card
*/

CardInterface = function()
{
	// constuctor
}

CardInterface.prototype = 
{
	/*
		public properties
	*/
	
	// название карты
	name: '',
	
	// сила атаки карты
	attack : 0,
	
	// здоровье карты
	health: 0,
	
	// количество ходов, необходмые для пробуждения карты
	awakeTime: 0,
	
	// позиция на столе (от 0 до 4)
	position: 0,
	
	
	/*
		public methods
	*/
	
	// отправляет карту из руки на стол
	spawn : function()
	{
		this._onSpawn();
		// some code here
	},
	
	// производит атаку
	attack : function()
	{
		this._onAttackStart();
		// some code here
		this._onAttackEnd();
	},
	
	// получает урон
	takeDamage : function()
	{
		this._onTakeDamage();
		// some code here
	},
	
	// умирает
	die : function()
	{
		this._onDie();
		// some code here
	},
	
	// засыпает
	sleep : function()
	{
		this._onSleep();
		// some code here
	},
	
	// пробуждается
	awake : function()
	{
		this._onAwake();
		// some code here
	},
	
	// игрок взял карту из руки и хочет положить на стол
	take : function()
	{
		this._onTake();
		// some code here
	},
	
	// игрок положил карту на стол
	put : function()
	{
		this._onPut();
		// some code here
	},
	
	
	/*
		public events
	*/
	
	// срабатывает при перетаскивании карты из руки на стол
	_onSpawn : function()
	{
		// some code here	
	},
	
	// срабатывает перед началом таки
	_onAttackStart : function()
	{
		// some code here	
	},
	
	// срабатывает после завершения атаки
	_onAttackEnd : function()
	{
		// some code here	
	},
	
	// срабатывает, когда карта получает урон
	_onTakeDamage : function()
	{
		// some code here	
	},
	
	// срабатывает при смерте карты
	_onDie : function()
	{
		// some code here	
	},
	
	// срабатывает, когда карта засыпает
	_onSleep : function()
	{
		// some code here
	},
	
	// срабатывает при пробуждении карты
	_onAwake : function()
	{
		// some code here	
	},
	
	// срабатывает когда игрок взял карту из руки и хочет положить на стол
	_onTake : function()
	{
		// some code here	
	},
	
	// срабатывает когда игрок положил карту на стол
	_onPut : function()
	{
		// some code here
	},
};