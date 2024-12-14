import { idleMan } from "./resources";
import { Actor, Color, vec } from "excalibur";
import * as ex from "excalibur";

export class Player extends Actor {
  constructor() {
    super({
      pos: vec(200, 300),
      width: 32, // for now we'll use a box so we can see the rotation
      height: 32, // later we'll use a circle collider
      color: Color.Yellow,
      collisionType: ex.CollisionType.Active
    });
  }
  onInitialize() {
    setInterval(() => { console.log(this.body.pos) }, 500);
    this.graphics.use(idleMan.toSprite())
    this.body.useGravity = true;
  }
}
