// source hosted on jsFiddle at https://jsfiddle.net/ShreyRavi/raum7yef/

/**
 * @author Shreyas Tallamraju
 * @description A minimalist digital clock written in p5.js
 * @version 0.1.0
 */

// CONSTANTS
const DIMENSIONS = {
    "WIDTH": 320,
    "HEIGHT": 320,
};
const BACKGROUND_COLOR = 0;
const STROKE_WEIGHT = 4;
const TEXT_SIZE = 48;

let canvas;

/**
 * @function setup
 * @description p5.js setup function that creates the Canvas
 */
function setup() {
    canvas = createCanvas(DIMENSIONS.WIDTH, DIMENSIONS.HEIGHT); 
    canvas.parent('sketch');
}

/**
 * @function draw
 * @description p5.js draw function that draws on Canvas
 */
function draw() {
    background(BACKGROUND_COLOR);
    strokeWeight(STROKE_WEIGHT);
    textSize(TEXT_SIZE);
    fill(255);
    textAlign(CENTER, CENTER);
    text(new Date().toLocaleTimeString(), DIMENSIONS.WIDTH / 2, DIMENSIONS.HEIGHT / 2);
}