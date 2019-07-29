const canvas = require('../canvas');

// Properties to be implemented by the extending class.
function Entity({ x, y, width, height } = {}) {
  // Position
  this.x = x;
  this.y = y;

  // Size
  this.width = width;
  this.height = height;

  // Image and image sources used by this entity.
  // To be provided by the extending class.
  this.image = new Image();
  this.imageSrc = null;

  // Type of challenger.
  // Optional, allows for additional validation.
  this.type = '';
}

// Types of entities.
Entity.types = {
  PLAYER: 'player',
  BULLET: 'bullet',
  SHIP: 'ship',
  BOMB: 'bomb',
  EFFECT: 'effect'
};

// Initializer.
Entity.prototype.init = function() {
  this.loadImage();
};

// Load an image source into the image object.
Entity.prototype.loadImage = function() {
  this.image.src = this.imageSrc;
};

// Remove this entity instance from the entities list.
Entity.prototype.remove = function(entities, idx) {
  entities.splice(idx, 1);
};

// Update action.
// To be implemented by the extending class.
Entity.prototype.update = function() {};

// Render action.
Entity.prototype.render = function() {
  canvas.drawImage({
    image: this.image,
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  });
};

module.exports = Entity;
