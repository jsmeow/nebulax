const emojis = require('emoji.json/emoji-compact.json');

function log(logger) {
  const name = `${emojis[2793]} Nebulax`;

  return {
    run() {
      const msg = `Initializing ${name}`;
      logger.info(msg);
    },
    init: {
      suc() {
        const msg = `${name} initialized`;
        logger.info(msg);
      },
      fail() {
        const msg = `${name} failed to initialize`;
        logger.info(msg);
      }
    }
  };
}

module.exports = log;