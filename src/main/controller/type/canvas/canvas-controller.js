const { window } = require('../../../options');
const log = require('../../../util/log');
const { whteHvyChckMrk } = require('../../../util/emoji');

// The application canvas controller
function CanvasController() {
  // Define the canvas reference and canvas context
  const canvas = document.querySelector('canvas');

  // Get the window size dimensions
  this.width = window.width * window.scale;
  this.height = window.height * window.scale;

  // Set the canvas dimensions to the window size
  canvas.width = this.width;
  canvas.height = this.height;

  // Define the offscreen canvas reference that mirrors the main canvas
  // This is done to optimize image rendering and performance
  const offscreenCanvas = canvas.transferControlToOffscreen();

  // Set the offscreen canvas dimensions to the window size
  offscreenCanvas.width = this.width;
  offscreenCanvas.height = this.height;

  // Define the offscreen canvas context
  // Since transferControlToOffscreen is used on the offscreen canvas, all
  // drawing will be done with this context
  this.ctx = offscreenCanvas.getContext('2d');

  log.succ(`${whteHvyChckMrk} successfully created the canvas controller`);
}

module.exports = new CanvasController();
