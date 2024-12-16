import * as ex from "excalibur";
import { Player } from "./player";
import { Capsule } from "./capsule";
import "./index.css";
import { resources } from "./resources";
import { addPermission } from "./permission";

ex.Flags.useCanvasGraphicsContext();

const game = new ex.Engine({
  pixelArt: true,
  canvasElementId: "game",
});
const loader = new ex.Loader(resources);

document.body.addEventListener("click", function handler(event) {
  this.removeEventListener("click", handler);
  addPermission();
});

game.start(loader).then(() => {
  game.currentScene.physics.config.solver = ex.SolverStrategy.Realistic;
  game.currentScene.physics.config.gravity = ex.vec(0, 300);
  game.add(
    new Capsule(10, 10, game.screen.width - 30, game.screen.height - 30)
  );
  game.add(new Player());
});
