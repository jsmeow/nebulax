const canvas = require('../../../canvas');
const Bullet = require('../bullet');
const enemyImageSrc =
  './main/entities/bullet/standard/assets/images/enemy-standard-bullet.png';
const alliedImageSrc =
  './main/entities/bullet/standard/assets/images/allied-standard-bullet.png';

function StandardBullet({ x, y, width, height, attack, faction }) {
  Bullet.call(this, { x, y, width, height, attack, faction });

  /** @override **/
  this.imageSrc = {
    enemy: enemyImageSrc,
    allied: alliedImageSrc
  };

  /** @override **/
  this.width = StandardBullet.width;
  this.height = StandardBullet.height;

  this.init();
}

StandardBullet.prototype = Object.create(Bullet.prototype);

// Size
StandardBullet.width = 6.667;
StandardBullet.height = 6.667;

module.exports = StandardBullet;
