const DestroyExplosion = require('../../category/explosion/destroy/destroy-explosion');

function ExplosionFactory(entities) {
  this.destroyExplosion = function(args) {
    const entity = new DestroyExplosion({ ...args, entities });
    entities.push(entity);
    return entity;
  };
}

module.exports = ExplosionFactory;
