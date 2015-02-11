// Game = function() {
// 	this.cursors = XV.game.input.keyboard.createCursorKeys();

//      	this.wasd = {
//                 up: XV.game.input.keyboard.addKey(Phaser.Keyboard.W),
//                 down: XV.game.input.keyboard.addKey(Phaser.Keyboard.S),
//                 left: XV.game.input.keyboard.addKey(Phaser.Keyboard.A),
//                 right: XV.game.input.keyboard.addKey(Phaser.Keyboard.D),
//             };
// } 
var fighterJet;

var game = new Phaser.Game(
	1000, 750, Phaser.AUTO, '',
	{ preload: preload, create: create, update: update}
);

function preload() {
	game.load.image('ship', 'fighterJet.png');
}

function create() {
	fighterJet = game.add.sprite(game.world.centerX, 600, 'ship');
	
}


function update() {

	 fighterJet.x = game.input.x;
	 cursors = game.input.keyboard.createCursorKeys();
        var fighterJetHalfWidth = fighterJet.width / 2;
        
        if (fighterJet.x < fighterJetHalfWidth) {
            fighterJet.x = fighterJetHalfWidth;
        } else if (fighterJet.x > game.width - fighterJetHalfWidth) {
            fighterJet.x = game.width - fighterJetHalfWidth;
        } 

// cursors = game.input.keyboard.createCursorKeys();
  // 		if (cursors.left.isDown) {
		// 	fighterJet.velocity.x = -200;
		// } else if (cursors.right.isDown) {
		// 	fighterJet.velocity.x = 200;
		// }

 }







// fighterJet.onkeydown=function(){
//   			if 
//   		};