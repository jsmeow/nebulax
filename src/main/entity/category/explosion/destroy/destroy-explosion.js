const canvas = require('../../../../canvas/canvas');
const Explosion = require('../explosion');
const imageSource1 =
  './main/entity/category/explosion/destroy/assets/images/shield1.png';
const imageSource2 =
  './main/entity/category/explosion/destroy/assets/images/shield2.png';
const imageSource3 =
  './main/entity/category/explosion/destroy/assets/images/shield3.png';
const imageSource4 =
  './main/entity/category/explosion/destroy/assets/images/image-source-4.png';
const imageSource5 =
  './main/entity/category/explosion/destroy/assets/images/image-source-5.png';
const imageSource6 =
  './main/entity/category/explosion/destroy/assets/images/image-source-6.png';
const imageSource7 =
  './main/entity/category/explosion/destroy/assets/images/image-source-7.png';

function DestroyExplosion({ x, y, width, height, faction, points, entities }) {
  Explosion.call(this, {
    x,
    y,
    width: width || DestroyExplosion.width,
    height: height || DestroyExplosion.height,
    faction,
    points,
    imageSources: [
      imageSource1,
      imageSource2,
      imageSource3,
      imageSource4,
      imageSource5,
      imageSource6,
      imageSource7
    ],
    entities
  });

  /** @override **/
  this.props.type = [...this.props.type, 'destroy'];
}

DestroyExplosion.prototype = Object.create(Explosion.prototype);

DestroyExplosion.width = canvas.res * 15;
DestroyExplosion.height = canvas.res * 15;

module.exports = DestroyExplosion;
