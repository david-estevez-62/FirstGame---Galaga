
  
var fighterJet;

var game= new Phaser.Game(
	800, 600, Phaser.AUTO, '',
	{ preload: preload, create: create, update: update}
);

function preload() {
	game.load.image('jet', 'fighterJet.png');
}

function create() {
	fighterJet = game.add.sprite(game.world.centerX, 0, 'jet');
	
}


function update() {

}

