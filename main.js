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

var aliens;
var explosions;
var enemyBullets;
var score = 0;
var scoreString = '';
var scoreText;
var lives;
var enemyBullet;
var firingTimer = 0;
var stateText;
var livingEnemies = [];







var game = new Phaser.Game(
	1050, 750, Phaser.AUTO, '',
	{ preload: preload, create: create, update: update}
);

function preload() {
	game.load.image('starfield', 'starfield.png')
	game.load.image('ship', 'fighterJet.png');
	game.load.image('bullet', 'blueLaser.png');
	
    // game.load.image('button2', 'credits.png');
    game.load.image('logo', 'logogalaga6.png');
   

    game.load.audio('laser', 'LaserGun.mp3')
    game.load.audio('thruster', 'thruster.wav')
    game.load.audio('explosion', 'explosion.mp3')



    game.load.spritesheet('kaboom', 'explode.png', 128, 128);
    game.load.spritesheet('aliens1', 'spritsheet04.png', 28, 28);
    game.load.image('enemyBullet', 'enemy-bullet.png')
    game.load.image('button2', 'game-over.png')
}

function create() {

			starfield = game.add.tileSprite(game.world.centerX / 100, 0, 1050, 750, 'starfield');
			
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


			bullets = game.add.group();
			var shoot = function() {
				var bullet1 = bullets.create(ship.x+25,ship.y+50, 'bullet')
				var bullet2 = bullets.create(ship.x+55,ship.y+50, 'bullet')
				game.physics.arcade.enable([bullet1, bullet2]);
				bullet1.body.velocity.y = -800; 
				bullet2.body.velocity.y = -800; 

				sound1 = game.sound.play('laser');


			}

			fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
			fireButton.onDown.add(shoot);





			aliens1 = game.add.group();
            aliens1.visible = true;



			function createAliens() { //aliens 3 verde
                for (var y = 0; y <= 2; y++)
                {
                    for (var x = 0; x < 8; x++)
                    {
                        //   var aliens = aliens1.create(x * 50 + game.world.centerX / 2 + 35, y * 30, 'aliens1');
                        var aliens = aliens1.create(x*30+game.world.centerX / 2, y*30, 'aliens1');
                        aliens.anchor.setTo(0.5, 0.5);
                        game.physics.arcade.enable(aliens);
                        // mov_alien(aliens1), x * 50 + game.world.centerX / 2 + 35, y * 30);
                        aliens.animations.add('fly3', [0, 1], 2, true);
                        aliens.play('fly3');
                    }
                }
                aliens1.x = 100;
                aliens1.y = 50;
                //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.
                var tween = game.add.tween(aliens1).to({x: 200}, 2000, Phaser.Easing.Circular.InOut, true, 9400, 100, true);
                var tween2 = game.add.tween(aliens1).to({y: 510}, 2000, Phaser.Easing.Circular.InOut, true, 9200, 100, true);
                //  When the tween completes it calls descend, before looping again
                tween.onComplete.add(descend, this);
            }



			// // The enemy's bullets
			// 	enemyBullets = game.add.group();
			// 	enemyBullets.enableBody = true;
			// 	enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
			// 	enemyBullets.createMultiple(30, 'enemyBullet');
			// 	enemyBullets.setAll('anchor.x', 0.5);
			// 	enemyBullets.setAll('anchor.y', 1);
			// 	enemyBullets.setAll('outOfBoundsKill', true);
			// 	enemyBullets.setAll('checkWorldBounds', true);


			// 	aliens = game.add.group();
			// 	aliens.enableBody = true;
			// 	aliens.physicsBodyType = Phaser.Physics.ARCADE;

			// 	createAliens();

			// 	//The score
			// 	scoreString = "Score: ";
			// 	scoretext = game.add.text(10,10, scoreString + score, { font: '34px Arial', fill: '#fff' });

			// 	//Lives
			// 	lives = game.add.group();
			// 	game.add.text(game.world.width - 100, 10, 'Lives: ', {font: '34px Arial', fill: '#fff'});

			// 	stateText = game.add.text(game.world.centerX, game.world.centerY,"",{ font: '84px Arial', fill: '#fff'});
			// 	stateText.anchor,setTo(0.5,0.5);
			// 	stateText.visible = false;

			// 	for (var i = 0; i < 3; i++) {
			// 		var ship = lives.create(game.world.width - 100 + (30 * i), 60, 'ship');
			// 		ship.anchor.setTo(0.5, 0.5);
			// 		ship.angle = 90;
			// 		ship.alpha = 0.4;
			// 	}

			// 	//  An explosion pool
			// 	explosions = game.add.group();
			// 	explosions.createMultiple(30, 'kaboom');
			// 	explosions.forEach(setupInvader, this); 


			


	  
			// var tween = game.add.tween(aliens).to( { x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

			// 	//  When the tween loops it calls descend
			// 	tween.onLoop.add(descend, this);
			// }



			function descend() {
				aliens.y += 10;
			}


		     var playGame = function () {

		     	game.hasStarted = true;
		     	logo.destroy();
		     	ship = game.add.sprite(game.world.centerX, 600, 'ship');
		     	ship.isMoving = false;

		     	
		     		sound2 = game.sound.play('thruster', 2, true);

		     	createAliens();
     	
     	

     }



     	logo.inputEnabled = true;

        logo.input.useHandCursor = true;

        logo.events.onInputDown.add(playGame, this);


     // buttonNewGame = game.add.button(game.world.centerX - 50, 440, 'button2', actionOnClickVoltar, this, 2, 1, 0);
     // buttonNewGame.visible = false;

     	// buttonCredits = game.add.button(game.world.centerX - 95, 340, 'button2', actionOnClickCreditos, this, 2, 1, 0);






}

function update() {

	starfield.tilePosition.y += 5;
	

	/////////////////////////////////
	// move ship using arrow keys //
	/////////////////////////////////
	if (game.hasStarted === true) {

		if (ship.isMoving === "left"){

			ship.x-=20;
			

		} else if (ship.isMoving === "right") {

			ship.x+=20;


		} 
	}

	////////////////////////////
	// move ship using mouse //
	////////////////////////////
	// ship.x = game.input.x;
	 
 //        var shipHalfWidth = ship.width / 2;
        
 //        if (ship.x < shipHalfWidth) {
 //            ship.x = shipHalfWidth;
 //        } else if (ship.x > game.width - shipHalfWidth) {
 //            ship.x = game.width - shipHalfWidth;
 //        } 


 	// 	if (game.time.now > firingTimer) {
		// 	enemyFires();
		// }


 		game.physics.arcade.overlap(bullets, aliens1, collisionHandler, null, this);
		// game.physics.arcade.overlap(enemyBullets, ship, enemyHitsPlayer, null, this);
		


 }









function collisionHandler (bullet, aliens) {
	bullet.kill();
	aliens.kill();
	sound3 = game.sound.play('explosion');

	// score += 20;
	// scoreText.text = scoreString + score;

	// var explosion = explosions.getFirstExists(false);
	// explosion.reset(alien.body.x, alien.body.y);
	// explosion.play('kaboom', 30, false, true);

	// if(aliens.countLiving() === 0) {
	// 	score +=1000;
	// 	scoreText = scoreString + score;
	// 	enemyBullets.callAll('kill', this);
	// 	stateText.text = ' Speed it up! \n Click to restart.'
	// 	stateText.visible = true;

	// 	game.input.onTap.addOnce(restart, this);
	// }

}



// function enemyHitsPlayer (ship, bullet) {
// 	bullet.kill();

// 	var live = lives.getFirstAlive();

// 	if (live){
// 		live.kill();
// 	}

// 	var explosions = explosions.getFirstExists(false);
// 	explosion.reset(ship.body.x, ship.body.y);
// 	explosion.play('kaboom', 30, false, true);

// 	if(lives.countLiving() < 1 ) {
// 		ship.kill();
// 		enemyBullets.callAll('kill');

// 		stateText.text="GAME OVER \n Click to restart";
// 		stateText.visible = true;

// 		game.inpit.onTap.addOnce(restart, this);
// 	}

// }


// // Create a function where if the enemy is alive then they can shoot
// function enemyFires () {

// 		//  Grab the first bullet we can from the pool
// 		enemyBullet = enemyBullets.getFirstExists(false);

// 		livingEnemies.length=0;

// 		aliens.forEachAlive(function(alien){

// 			// put every living enemy in an array
// 			livingEnemies.push(alien);
// 		});

// 		if (enemyBullet && livingEnemies.length > 0) {
// 			var random=game.rnd.integerInRange(0,livingEnemies.length-1);

// 			// randomly select one of them
// 			var shooter=livingEnemies[random];
// 			// And fire the bullet from this enemy
// 			enemyBullet.reset(shooter.body.x, shooter.body.y);

// 			game.physics.arcade.moveToObject(enemyBullet,ship,120);
// 			firingTimer = game.time.now + 2000;
// 		}
// 	}



function restart () {
	lives.callAll('revive');
	aliens.removeAll();
	createAliens();

	ship.revive();
	stateText.visible = false;
}







	

// function actionOnClick() {
//                 logo.visible = false;
//                 ship.visible = true;
//                 buttonInitiate.visible = false;
//                 buttonCredits.visible = false;
//     }
// function actionOnClickCreditos() {
//                 logo.visible = false;
//                 buttonInitiate.visible = false;
//                 buttonNewGame.visible = true;
//                 buttonCredits.visible = false;
//     }
// function actionOnClickVoltar() {
//                 buttonInitiate.visible = true;
//                 logo.visible = true;
//                 buttonCredits.visible = true;
//                 buttonNewGame.visible = false;
// }


	  
	 
        
        
        

































































// cursors = game.input.keyboard.createCursorKeys();
  // 		if (cursors.left.isDown) {
		// 	fighterJet.velocity.x = -200;
		// } else if (cursors.right.isDown) {
		// 	fighterJet.velocity.x = 200;
		// }


   








// fighterJet.onkeydown=function(){
//   			if 
//   		};