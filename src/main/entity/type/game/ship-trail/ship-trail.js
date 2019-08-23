const { fps } = require('../../../options');
const Entity = require('../../entity');

function ShipTrail({
  width,
  height,
  imgSrc,
  degrees,
  creator,
  entities,
  getX,
  getY
}) {
  Entity.call(this, {
    x: getX(),
    y: getY(),
    width,
    height,
    type: ['ship-trail'],
    imgSrc,
    degrees,
    creator,
    entities
  });

  /** @override **/
  this.status = {
    ...this.status,
    alive: true,
    invincible: true
  };

  /** @override **/
  this.animationTimer.delay = fps * 0.2;

  /** @override **/
  this.updatePosition = function() {
    this.pos.x = getX();
    this.pos.y = getY();
  };
}

ShipTrail.prototype = Object.create(Entity.prototype);

module.exports = ShipTrail;