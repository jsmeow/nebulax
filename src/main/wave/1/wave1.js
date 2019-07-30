const canvas = require('../../canvas');
const Wave = require('../wave');
const FactionedEntity = require('../../entity/base/factioned');
const Bowerbird = require('../../entity/ship/bowerbird/bowerbird');

function Wave1(player, entities) {
  Wave.call(this, player, entities);

  this.init();
}

Wave1.prototype = Object.create(Wave.prototype);

/** @override **/
Wave.prototype.createEntities = function() {
  this.waveEntities = [
    new Bowerbird({
      x: canvas.width * 0.5 - Bowerbird.width / 2,
      y: Bowerbird.height * 3,
      faction: FactionedEntity.factions.ENEMY,
      player: this.player
    })
  ];

  this.waveEntities[0].patrol();
};

module.exports = Wave1;
