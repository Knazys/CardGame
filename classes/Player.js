
/*
	Класс Player
*/

Player = function(params)
{
    // constuctor
    this.$handFrame = $(params.$handFrame);

    this.name = params.name;
    this.health = params.health;
    this.cardsInDeck = params.cardsInDeck || [];
    
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

    // объект со здоровьем игрока - меня
	healthFrame: null,
	
	// карты в колоде
	cardsInDeck: [],
	
	// карты в руке
	cardsInHand: [],
	
	// карты на столе
	cardsOnTable: [],

    // максимальное колчиество карт в руке
	maxCardsInHand: 8,

    // jquery объект-контейнер руки
	$handFrame: null,
	
	
	/*
		public methods
	*/

    // добавляем инфо об игроке на экран
	spawn: function (playerFrame) {
	    var myFrame = $(playerFrame);
	    myFrame.html('<div class="player-title">' + this.name + '</div>');
	    // кэшируем объект со здоровьем
	    this.healthFrame = $('<div>').addClass('player-health').html(this.health);

	    myFrame.append(this.healthFrame);
	},
	
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
	
	// игрок получает карту из колоды
	pullCards : function(num)
	{
	    console.log('pullCards');
		this._onPullCard();
	    // some code here

		for (var i = 0; i < num; i++) {

		    console.log('111');
		    console.log(this.cardsInDeck);
		    // если кард в колоде нет, ниче не делаем
		    if (this.cardsInDeck.length == 0) return;

		    console.log('222');

		    console.log(this.cardsInDeck);
		    var newCard = this.cardsInDeck.shift();


		    // если карт в руке больше максмально возможного количества
		    // убираем первую карту из руки
		    if (this.cardsInHand.length > this.maxCardsInHand) {
		        this.cardsInHand.shift();
		    }



            // 
		    this.addToHand(newCard);
		}
	},

    // карта добавляется в руку
	addToHand: function (newCard) {
	    this._onAddToHand();
	    // some code here

	    var li = $('<li>').addClass('hand-card');

	    var cardFrame = newCard.getHtmlFrame();
	    li.append(cardFrame);

	    this.$handFrame.append(li);

	    this.cardsInHand.push(newCard);
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

    // срабатывает, когда карта добавляется в руку
	_onAddToHand: function () {
	    // some code here
	},
	
};