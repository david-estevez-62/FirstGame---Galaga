// Game = function() {
// 	

//      	this.wasd = {
//                 up: XV.game.input.keyboard.addKey(Phaser.Keyboard.W),
//                 down: XV.game.input.keyboard.addKey(Phaser.Keyboard.S),
//                 left: XV.game.input.keyboard.addKey(Phaser.Keyboard.A),
//                 right: XV.game.input.keyboard.addKey(Phaser.Keyboard.D),
//             };
// } 

var ship;
var bullets;
var bulletTime = 0;
var starfield;


// var buttonCredits;
var logo;
var buttonNewGame;
// var buttonCredits;


var game = new Phaser.Game(
	1050, 750, Phaser.AUTO, '',
	{ preload: preload, create: create, update: update}
);

function preload() {
	game.load.image('ship', 'fighterJet.png');
	game.load.image('bullet', 'blueLaser.png');
	game.load.image('starfield', 'starfield.png')


	
    // game.load.image('button2', 'credits.png');
    game.load.image('logo', 'logogalaga2.png');
}

function create() {

	starfield = game.add.tileSprite(game.world.centerX / 100, 0, 1050, 750, 'starfield');
	
    // buttonCredits = game.add.button(game.world.centerX - 95, 340, 'button2', actionOnClickCreditos, this, 2, 1, 0);
    


	
	logo = game.add.sprite(40, 65, 'logo');

	game.cursors = game.input.keyboard.createCursorKeys();
	

	var moveLeft = function () {
		ship.isMoving = "left"
	}
	var moveRight = function () {
		ship.isMoving = "right";
	}

	var stopMoving1 = function() {
		ship.isMoving = false;
	}
	var stopMoving2 = function() {
		ship.isMoving = false;
	}



	game.cursors.left.onDown.add(moveLeft);
    game.cursors.right.onDown.add(moveRight);
    game.cursors.left.onUp.add(stopMoving1);
	game.cursors.right.onUp.add(stopMoving2);

	var shoot = function() {
		var bullet1 = game.add.sprite(ship.x+25,ship.y+50, 'bullet')
		var bullet2 = game.add.sprite(ship.x+55,ship.y+50, 'bullet')
		game.physics.arcade.enable([bullet1, bullet2]);
		bullet1.body.velocity.y = -800; 
		bullet2.body.velocity.y = -800; 

		

	}


	fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	fireButton.onDown.add(shoot);



     var playGame = function () {

     	game.hasStarted = true;
     	logo.destroy();
     	ship = game.add.sprite(game.world.centerX, 600, 'ship');
     	ship.isMoving = false;
     }



     	logo.inputEnabled = true;

        logo.input.useHandCursor = true;

        logo.events.onInputDown.add(playGame, this);


     buttonNewGame = game.add.button(game.world.centerX - 50, 440, 'button2', actionOnClickVoltar, this, 2, 1, 0);
     buttonNewGame.visible = false;
}


function update() {

	starfield.tilePosition.y += 5;
	

	/////////////////////////////////
	// move ship using arrow keys //
	/////////////////////////////////
	if (game.hasStarted === true) {
		if (ship.isMoving === "left"){

			ship.x-=20

		} else if (ship.isMoving === "right") {

			ship.x+=20

		} 
	}

	



	////////////////////////////
	// move ship using mouse //
	////////////////////////////
	
	// var shipHalfWidth = ship.width / 2;
	// ship.x = game.input.x;

	// if (ship.x < shipHalfWidth) {
 //            ship.x = shipHalfWidth;
        
 //    } else if (ship.x > game.width - shipHalfWidth) {
 //            ship.x = game.width - shipHalfWidth;
 //    } 



 }
	

function actionOnClick() {
                logo.visible = false;
                ship.visible = true;
                buttonInitiate.visible = false;
                buttonCredits.visible = false;
    }
function actionOnClickCreditos() {
                logo.visible = false;
                buttonInitiate.visible = false;
                buttonNewGame.visible = true;
                buttonCredits.visible = false;
    }
function actionOnClickVoltar() {
                buttonInitiate.visible = true;
                logo.visible = true;
                buttonCredits.visible = true;
                buttonNewGame.visible = false;
}


	  
	 
        
        
        

































































// cursors = game.input.keyboard.createCursorKeys();
  // 		if (cursors.left.isDown) {
		// 	fighterJet.velocity.x = -200;
		// } else if (cursors.right.isDown) {
		// 	fighterJet.velocity.x = 200;
		// }


   








// fighterJet.onkeydown=function(){
//   			if 
//   		};