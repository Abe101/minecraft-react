import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

import {
  dirtImg,
  grassImg,
  glassImg,
  logImg,
  woodImg,
  strippedLogImg,
  cobblestoneImg,
} from "./assets";

const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const logTexture = new TextureLoader().load(logImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);
const strippedLogTexture = new TextureLoader().load(strippedLogImg);
const cobblestoneTexture = new TextureLoader().load(cobblestoneImg);

dirtTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
strippedLogTexture.magFilter = NearestFilter;
cobblestoneTexture.magFilter = NearestFilter;

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
};
