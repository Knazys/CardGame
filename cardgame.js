// JavaScript Document

function require(scripts) 
{	
	req = function(i)
	{
		try
		{
			$.ajax({
				url: scripts[i],
				dataType: "script",
				async: false,       
				success: function () {
					//console.log(scripts[i]);
					i++;
					if( typeof scripts[i] == 'undefined' ) return;
					req(i);
				},
				error: function () 
				{
					throw new Error("Could not load script " + scripts[i]);
				}
			})
			/*.done(function() { console.log("second success"); })
			.fail(function() { console.log("error"); })
			.always(function() { console.log("finished"); })*/;
		}
		catch (e) 
		{
			console.error(e.message);
		}
	}
	
	req(0);
	
    
	
};

//var server = 'http://dnd.5squares.ru/';
var server = './';

$('head').append( $('<link>', {'type':'text/css', 'rel':'stylesheet', 'href':server+'common.css'}) );
$('head').append( $('<link>', {'type':'text/css', 'rel':'stylesheet', 'media':'screen', 'href':server+'mobile.css'}) );
$('head').append( $('<link>', {'type':'text/css', 'rel':'stylesheet', 'media':'handheld', 'href':server+'mobile.css'}) );


require([
	server+'html5.js',
	server+'classes/functions.js', 
	server+'interfaces/CardInterface.js', 
	server + 'interfaces/PlayerInterface.js',
	server + 'classes/Card.js',
	server+'classes/Player.js', 
	server+'classes/Game.js', 
	//server+'classes/hero.js', 
	//server+'classes/leveling/newplayer.js', 
	//server+'classes/leveling/newwarrior.js',
	server+'classes/controller.js'
]);