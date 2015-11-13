
function Card(test)
{
	this.test = test;
	this.test2 = 'qwe';
	this.someSet();
	
}
Card.prototype = 
{
	test: '',
	test2 : 'asd',
	test3: '33',
	qwe : function()
	{
		console.log(this.test);
		console.log(this.test2);
		console.log(this.test3);
	},
	someSet : function()
	{
		console.log('someSet');
		this.test3 = 'yyy';
	}
}


function MyCard(fff)
{
	//MyCard.superclass.constructor.apply(this, arguments);
	Card.apply(this, arguments);
	
};
extend(MyCard,Card);
//MyCard.prototype = Object.create(Card.prototype);
//MyCard.prototype.constructor = MyCard;

MyCard.prototype.qwe = function()
{
	console.log(this.test);
	console.log(this.test2);
};