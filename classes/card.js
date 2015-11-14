
function Card(params)
{

    this.name = params.name;
    this.attack = params.attack;
    this.health = params.health;
	
}

extend(Card, CardInterface);

Card.prototype =
{
    /*
		public properties
	*/

    // �������� �����
    name: '',

    // ���� ����� �����
    attack: 0,

    // �������� �����
    health: 0,

    // ���������� �����, ���������� ��� ����������� �����
    awakeTime: 0,

    // ������� �� ����� (�� 0 �� 4)
    position: 0,

    // 
    $healhFrame: null,

    // 
    $attackFrame: null,


    /*
		public methods
	*/

    // ���������� ����� �� ���� �� ����
    spawn: function () {
        this._onSpawn();
        // some code here
    },

    // ���������� �����
    attack: function () {
        this._onAttackStart();
        // some code here
        this._onAttackEnd();
    },

    // �������� ����
    takeDamage: function () {
        this._onTakeDamage();
        // some code here
    },

    // �������
    die: function () {
        this._onDie();
        // some code here
    },

    // ��������
    sleep: function () {
        this._onSleep();
        // some code here
    },

    // ������������
    awake: function () {
        this._onAwake();
        // some code here
    },

    // ����� ���� ����� �� ���� � ����� �������� �� ����
    take: function () {
        this._onTake();
        // some code here
    },

    // ����� ������� ����� �� ����
    put: function () {
        this._onPut();
        // some code here
    },

    // ����� ������� ����� �� ����
    getHtmlFrame: function () {
        // some code here

        console.log('getHtmlFrame');
        
        this.$attackFrame = $('<div>').addClass('card-attack').html(this.attack);
        this.$healthFrame = $('<div>').addClass('card-health').html(this.health);

        var cardFrame = $('<div>').addClass('card')
            .html('<div class="card-title">'+this.name+'</div>')
            .append(this.$attackFrame)
            .append(this.$healthFrame);

        return cardFrame;
    },




    /*
		public events
	*/

    // ����������� ��� �������������� ����� �� ���� �� ����
    _onSpawn: function () {
        // some code here	
    },

    // ����������� ����� ������� ����
    _onAttackStart: function () {
        // some code here	
    },

    // ����������� ����� ���������� �����
    _onAttackEnd: function () {
        // some code here	
    },

    // �����������, ����� ����� �������� ����
    _onTakeDamage: function () {
        // some code here	
    },

    // ����������� ��� ������ �����
    _onDie: function () {
        // some code here	
    },

    // �����������, ����� ����� ��������
    _onSleep: function () {
        // some code here
    },

    // ����������� ��� ����������� �����
    _onAwake: function () {
        // some code here	
    },

    // ����������� ����� ����� ���� ����� �� ���� � ����� �������� �� ����
    _onTake: function () {
        // some code here	
    },

    // ����������� ����� ����� ������� ����� �� ����
    _onPut: function () {
        // some code here
    },
};
