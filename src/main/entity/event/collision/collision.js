const entities = require('../../../entities');
const validateEntityCollision = require('../validate/validate-entity-collision');
const validateEntityCollisionEvent = require('../validate/validate-entity-collision-event');

// Cycle through the entities list and perform an entity collision event action
// If the event occurs.
function collision(index) {
  this.status.collided = false;

  // Cycle through the entities list and perform collision event action, if
  // Collision assertions hold.
  entities.forEach((entity, _index) => {
    // On collision, exchange attack damage and health points if applicable.
    // On collision, if the entity is explosive type, always set alive status to
    // False and skip the points exchange.
    // On collision, projectile kills are attributed to the creator entity, if
    // Applicable.
    // On collision, alive or dead status is always set after the the points
    // Exchange.
    if (
      validateEntityCollisionEvent(entity, index, _index) &&
      validateEntityCollision(entity)
    ) {
      if (this.type.includes('explosive')) {
        this.status.invincible = false;
        this.status.alive = false;
        this.status.dispose = true;
      } else if (!this.status.invincible) {
        this.points.health = this.points.health - entity.points.attack;
      }

      if (entity.type.includes('explosive')) {
        entity.status.invincible = false;
        entity.status.alive = false;
        entity.status.dispose = true;
      } else if (!entity.status.invincible) {
        entity.points.health = entity.points.health - this.points.attack;
      }

      if (this.points.health <= 0) {
        if (entity.creator) {
          entity.creator.points.score =
            entity.creator.points.score + this.points.value;
        } else {
          entity.points.score = entity.points.score + this.points.value;
        }
        this.status.alive = false;
        this.status.dispose = true;
      }

      if (entity.points.health <= 0) {
        if (this.creator) {
          this.creator.points.score =
            this.creator.points.score + entity.points.value;
        } else {
          this.points.score = this.points.score + entity.points.value;
        }
        entity.status.alive = false;
        entity.status.dispose = true;
      }

      this.status.collided = true;
    }
  });
}

module.exports = collision;
