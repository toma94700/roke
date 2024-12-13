import { idleMan } from "./resources";
import { Actor, Color, vec } from "excalibur";

export class Player extends Actor {
  constructor() {
    super({
      pos: vec(200, 300),
      width: 32, // for now we'll use a box so we can see the rotation
      height: 32, // later we'll use a circle collider
      color: Color.Yellow,
    });
  }
  onInitialize() {
    this.graphics.use(idleMan.toSprite())
  }
}
