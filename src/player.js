import { idleMan } from "./resources";
import { Actor, Color, vec } from "excalibur";
import * as ex from "excalibur";

export class Player extends Actor {
  constructor() {
    super({
      pos: vec(200, 300),
      width: 32,
      height: 64,
      anchor: vec(0.5, 1),
      color: Color.Yellow,
      collisionType: ex.CollisionType.Active,
    });
  }
  onInitialize() {
    this.body.useGravity = true;
  }
  update(engine, delta) {
    if (
      engine.input.keyboard.isHeld(ex.Keys.Up) ||
      engine.input.gamepads.at(0).getAxes(ex.Axes.LeftStickY) > 0.5
    ) {
      this.vel.addEqual(ex.vec(0, -10));
    }
    if (
      engine.input.keyboard.isHeld(ex.Keys.Left) ||
      engine.input.gamepads.at(0).getAxes(ex.Axes.LeftStickX) < -0.5
    ) {
      this.vel.addEqual(ex.vec(-10, 0));
    }
    if (
      engine.input.keyboard.isHeld(ex.Keys.Right) ||
      engine.input.gamepads.at(0).getAxes(ex.Axes.LeftStickX) > 0.5
    ) {
      this.vel.addEqual(ex.vec(10, 0));
    }

    this.graphics.use(idleMan.toSprite())
  }
}
