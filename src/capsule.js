import * as ex from "excalibur";

function colliderBox(x, y, width, height) {
  return new ex.CompositeCollider([
    new ex.EdgeCollider({ begin: ex.vec(x, y), end: ex.vec(width, y) }),
    new ex.EdgeCollider({ begin: ex.vec(x, y), end: ex.vec(x, height) }),
    new ex.EdgeCollider({ begin: ex.vec(width, y), end: ex.vec(width, height) }),
    new ex.EdgeCollider({ begin: ex.vec(x, height), end: ex.vec(width, height) }),
  ]);
}

export class Capsule extends ex.Actor {
  constructor(x, y, width, height) {
    super({
      x: x,
      y: y,
      color: ex.Color.Teal,
      width: width,
      height: height,
      collisionType: ex.CollisionType.Fixed,
      collider: colliderBox(x, y, width, height),
      anchor: ex.vec(0, 0),
    });
  }
  onInitialize() {
    this.graphics.use(
      new ex.Rectangle({
        width: this.width,
        height: this.height,
        color: ex.Color.Teal,
      })
    );
  }
}
