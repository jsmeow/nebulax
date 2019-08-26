const Star = require('../star');
const getRndRangedFloat = require('../../../../../util/get-random-ranged-float');

function MediumStar(args) {
  Star.call(this, {
    ...args,
    width: MediumStar.WIDTH,
    height: MediumStar.HEIGHT,
    speed: args.speed || getRndRangedFloat(0.25, 0.3),
    dy: args.dy || 1
  });
}

MediumStar.prototype = Object.create(Star.prototype);

MediumStar.PATH = `${Star.PATH}/medium`;
MediumStar.WIDTH = 3;
MediumStar.HEIGHT = 3;
MediumStar.IMG_SRC = {
  PURPLE_BLINKING: [
    `${MediumStar.PATH}/assets/images/purple-blinking/image-source-1.png`,
    `${MediumStar.PATH}/assets/images/purple-blinking/image-source-2.png`,
    `${MediumStar.PATH}/assets/images/purple-blinking/image-source-3.png`,
    `${MediumStar.PATH}/assets/images/purple-blinking/image-source-2.png`
  ],
  RED_BLINKING: [
    `${MediumStar.PATH}/assets/images/red-blinking/image-source-1.png`,
    `${MediumStar.PATH}/assets/images/red-blinking/image-source-2.png`,
    `${MediumStar.PATH}/assets/images/red-blinking/image-source-3.png`,
    `${MediumStar.PATH}/assets/images/red-blinking/image-source-2.png`
  ],
  WHITE_BLINKING: [
    `${MediumStar.PATH}/assets/images/white-blinking/image-source-1.png`,
    `${MediumStar.PATH}/assets/images/white-blinking/image-source-2.png`,
    `${MediumStar.PATH}/assets/images/white-blinking/image-source-3.png`,
    `${MediumStar.PATH}/assets/images/white-blinking/image-source-2.png`
  ]
};

module.exports = MediumStar;