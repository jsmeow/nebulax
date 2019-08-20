const Background = require('../background');
const imageSource =
  './main/entity/category/background/space/assets/images/image-source.png';

function Space({ pos, dims, vector, props, status, points, image, meta }) {
  Background.call(this, {
    pos,
    dims,
    vector,
    props: {
      ...props,
      type: ['space']
    },
    status,
    points,
    image: {
      ...image,
      src: imageSource
    },
    meta
  });

  // Background entities

  /** @override **/
  this.entities = [
    ...[...Array(1)].map(() => {
      return this.meta.factory.background.space.star.largeWide.largeWidePurpleStar1();
    }),
    ...[...Array(1)].map(() => {
      return this.meta.factory.background.space.star.largeWide.largeWideRedStar1();
    }),
    ...[...Array(1)].map(() => {
      return this.meta.factory.background.space.star.largeWide.largeWideWhiteStar1();
    }),

    ...[...Array(2)].map(() => {
      return this.meta.factory.background.space.star.large.largeBlinkingPurpleStar1();
    }),
    ...[...Array(2)].map(() => {
      return this.meta.factory.background.space.star.large.largeBlinkingRedStar1();
    }),
    ...[...Array(2)].map(() => {
      return this.meta.factory.background.space.star.large.largeBlinkingWhiteStar1();
    }),

    ...[...Array(1)].map(() => {
      return this.meta.factory.background.space.star.medium.mediumBlinkingPurpleStar1();
    }),
    ...[...Array(1)].map(() => {
      return this.meta.factory.background.space.star.medium.mediumBlinkingRedStar1();
    }),
    ...[...Array(1)].map(() => {
      return this.meta.factory.background.space.star.medium.mediumBlinkingWhiteStar1();
    }),

    ...[...Array(5)].map(() => {
      return this.meta.factory.background.space.star.small.smallWhiteStar1();
    }),
    ...[...Array(5)].map(() => {
      return this.meta.factory.background.space.star.small.smallWhiteStar2();
    }),
    ...[...Array(5)].map(() => {
      return this.meta.factory.background.space.star.small.smallWhiteStar3();
    }),
    ...[...Array(5)].map(() => {
      return this.meta.factory.background.space.star.small.smallWhiteStar4();
    }),
    ...[...Array(5)].map(() => {
      return this.meta.factory.background.space.star.small.smallWhiteStar5();
    }),
    ...[...Array(5)].map(() => {
      return this.meta.factory.background.space.star.small.smallBlinkingWhiteStar1();
    }),

    ...[...Array(1)].map(() => {
      return this.meta.factory.background.space.planet.planet1();
    }),
    ...[...Array(1)].map(() => {
      return this.meta.factory.background.space.planet.planet2();
    })
  ];
}

Space.prototype = Object.create(Background.prototype);

module.exports = Space;
