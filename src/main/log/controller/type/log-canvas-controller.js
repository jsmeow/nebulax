const emojis = require('emoji.json/emoji-compact.json');

module.exports = function(logger) {
  const name = `${emojis[2981]} canvas`;
  return {
    init: {
      success() {
        const msg = `Successfully created the ${name} controller`;
        logger.success(msg);
      },
      fail() {
        const msg = `The ${name} controller was not created`;
        logger.error(msg);
      }
    }
  };
};
