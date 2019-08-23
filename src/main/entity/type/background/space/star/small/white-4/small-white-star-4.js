const SmallStar = require('../small-star');
const imgSrc =
  './main/entity/type/background/space/star/small/white-4/assets/images/image-source.png';

function SmallWhiteStar4({ pos, dims, vector, status, points, timers, meta }) {
  SmallStar.call(this, {
    pos,
    dims,
    vector,
    props: {
      type: ['white-4']
    },
    status,
    points,
    img: {
      src: imgSrc
    },
    timers,
    meta
  });
}

SmallWhiteStar4.prototype = Object.create(SmallStar.prototype);

module.exports = SmallWhiteStar4;