const Wave = require('../wave');
const Faction = require('../../entities/base/faction');
const Narrowbill = require('../../entities/ship/narrowbill/narrowbill');

function Wave1(entities) {
  Wave.call(this, entities);

  this.init();
}

Wave1.prototype = Object.create(Wave.prototype);

/** @override **/
Wave.prototype.createEntities = function() {
  this.waveEntities = [
    new Narrowbill({ x: 777, y: 400, faction: Faction.factions.ENEMY })
  ];
  /* This.waveEntities[0].path = [
    { x: 600, y: 600 },
    { x: 1000, y: 600 },
    { x: 20, y: 20 }
  ];*/
};

module.exports = Wave1;
