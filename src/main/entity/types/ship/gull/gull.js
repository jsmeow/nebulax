const properties = require('../../../properties/properties-entity');
const ShipEntity = require('../ship');
const enemy = './main/entity/types/ship/gull/assets/images/enemy.png';
const allied = './main/entity/types/ship/gull/assets/images/allied.png';
const damaged = './main/entity/types/ship/gull/assets/images/damaged.png';

function GullEntity(args) {
  ShipEntity.call(this, { ...args });

  /** @override **/
  this.type = [properties.types.SHIP.ID, properties.types.SHIP.SMALL.BOWERBIRD];

  /** @override **/
  this.imageSources.allied = allied;
  this.imageSources.enemy = enemy;
  this.imageSources.damaged = damaged;
}

GullEntity.prototype = Object.create(ShipEntity.prototype);

/** @override **/
GullEntity.prototype.prowl = function(x, y) {
  return this.vectorPoint({ x: this.player.x, y: y + 150 })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.vectorPoint({ x: this.player.x, y: this.y });
    })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.vectorPoint({ x: this.player.x, y: this.y });
    })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.vectorPoint({ x, y });
    });
};

module.exports = GullEntity;