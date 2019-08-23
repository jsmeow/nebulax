const Bowerbird = require('../../../type/game/ship/small/bowerbird/bowerbird');
const Player = require('../../../type/game/ship/player/player');

function SmallShipFactory(factory, entities) {
  this.bowerbird = function(args) {
    const entity = new Bowerbird({ ...args, factory, entities });
    entities.push(entity);
    return entity;
  };

  this.player = function() {
    const entity = new Player(factory, entities);
    entities.push(entity);
    return entity;
  };
}

module.exports = SmallShipFactory;