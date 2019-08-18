const canvas = require('../../../../../canvas');
const Entity = require('../../../../entity');

function Comet() {
  Entity.call(this, {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    width: canvas.pixel,
    height: canvas.pixel,
    dy: 2.5,
    type: ['background', 'space', 'comet']
  });

  // The color gradient used to render the comet and comet tail.
  // Comet is composed of k rectangles units where k is the gradient length.
  // https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
  const gradient = ['B3', '99', '80', '66', '4D', '33', '1A', '00'];

  // Comet will have a height of k rectangles units where k is the gradient
  // Length.
  const totalHeight = this.height * gradient.length;

  /** @override **/
  this.preUpdate = function() {
    // Get new random coordinate position on bottom boundary collision.
    if (this.y + this.dy - totalHeight >= canvas.height) {
      this.randomPosition({ height: { max: -0.5 } });
    }
  };

  /** @override **/
  this.render = function() {
    gradient.forEach((hex, index) => {
      canvas.drawRect({
        x: this.x,
        y: this.y - index * this.height,
        width: this.width,
        height: this.height,
        fillStyle: `#ffffff${hex}`
      });
    });
  };
}

Comet.prototype = Object.create(Entity.prototype);

module.exports = Comet;