import * as ex from "excalibur";
import { Player } from "./player";
import { Capsule } from "./capsule";
import "./index.css";
import { idleMan } from "./resources";
ex.Flags.useCanvasGraphicsContext();

const game = new ex.Engine({
  pixelArt: true,
  canvasElementId: "game",
});
const loader = new ex.Loader([idleMan]);


game.start(loader).then(
  () => {
      game.currentScene.physics.config.solver = ex.SolverStrategy.Realistic;
      game.currentScene.physics.config.gravity = ex.vec(0, 300);
      game.add(new Capsule(10, 10, game.screen.width - 30, game.screen.height - 30));
      game.add(new Player());
  }
)