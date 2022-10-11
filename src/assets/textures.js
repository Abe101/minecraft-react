import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

import {
  dirtImg,
  grassImg,
  glassImg,
  logImg,
  woodImg,
  strippedLogImg,
  cobblestoneImg,
  bedrockImg,
  blackWoolImg,
  whiteWoolImg,
  blueWoolImg,
  brownWoolImg,
  cyanWoolImg,
  grayWoolImg,
  greenWoolImg,
  lightBlueWoolImg,
  lightGrayWoolImg,
  limeWoolImg,
  magentaWoolImg,
  orangeWoolImg,
  pinkWoolImg,
  purpleWoolImg,
  redWoolImg,
  yellowWoolImg,
} from "./assets";

const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const logTexture = new TextureLoader().load(logImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(bedrockImg);
const strippedLogTexture = new TextureLoader().load(strippedLogImg);
const cobblestoneTexture = new TextureLoader().load(cobblestoneImg);
const blackWoolTexture = new TextureLoader().load(blackWoolImg);
const whiteWoolTexture = new TextureLoader().load(whiteWoolImg);
const blueWoolTexture = new TextureLoader().load(blueWoolImg);
const brownWoolTexture = new TextureLoader().load(brownWoolImg);
const cyanWoolTexture = new TextureLoader().load(cyanWoolImg);
const grayWoolTexture = new TextureLoader().load(grayWoolImg);
const greenWoolTexture = new TextureLoader().load(greenWoolImg);
const lightBlueWoolTexture = new TextureLoader().load(lightBlueWoolImg);
const lightGrayWoolTexture = new TextureLoader().load(lightGrayWoolImg);
const limeWoolTexture = new TextureLoader().load(limeWoolImg);
const magentaWoolTexture = new TextureLoader().load(magentaWoolImg);
const orangeWoolTexture = new TextureLoader().load(orangeWoolImg);
const pinkWoolTexture = new TextureLoader().load(pinkWoolImg);
const purpleWoolTexture = new TextureLoader().load(purpleWoolImg);
const redWoolTexture = new TextureLoader().load(redWoolImg);
const yellowWoolTexture = new TextureLoader().load(yellowWoolImg);

dirtTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
strippedLogTexture.magFilter = NearestFilter;
cobblestoneTexture.magFilter = NearestFilter;
blackWoolTexture.magFilter = NearestFilter;
whiteWoolTexture.magFilter = NearestFilter;
blueWoolTexture.magFilter = NearestFilter;
brownWoolTexture.magFilter = NearestFilter;
cyanWoolTexture.magFilter = NearestFilter;
grayWoolTexture.magFilter = NearestFilter;
greenWoolTexture.magFilter = NearestFilter;
lightBlueWoolTexture.magFilter = NearestFilter;
lightGrayWoolTexture.magFilter = NearestFilter;
limeWoolTexture.magFilter = NearestFilter;
magentaWoolTexture.magFilter = NearestFilter;
orangeWoolTexture.magFilter = NearestFilter;
pinkWoolTexture.magFilter = NearestFilter;
purpleWoolTexture.magFilter = NearestFilter;
redWoolTexture.magFilter = NearestFilter;
yellowWoolTexture.magFilter = NearestFilter;

groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.repeat.set(200, 200);

export {
  dirtTexture,
  grassTexture,
  glassTexture,
  logTexture,
  woodTexture,
  groundTexture,
  strippedLogTexture,
  cobblestoneTexture,
  blackWoolTexture,
  whiteWoolTexture,
  blueWoolTexture,
  brownWoolTexture,
  cyanWoolTexture,
  grayWoolTexture,
  greenWoolTexture,
  lightBlueWoolTexture,
  lightGrayWoolTexture,
  limeWoolTexture,
  magentaWoolTexture,
  orangeWoolTexture,
  pinkWoolTexture,
  purpleWoolTexture,
  redWoolTexture,
  yellowWoolTexture,
};
