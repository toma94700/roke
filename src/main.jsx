import * as ex from "excalibur";
import { Player } from "./player";
import "./index.css";
import { idleMan } from "./resources";
ex.Flags.useCanvasGraphicsContext();

const game = new ex.Engine({
  pixelArt: true,
  canvasElementId: "game",
  displayMode: ex.DisplayMode.FitContainerAndFill
});
const loader = new ex.Loader([idleMan])

// ex.Physics.gravity = ex.vec(0, 800);

game.start(loader).then(
  () => {
      game.currentScene.physics.config.solver = ex.SolverStrategy.Realistic;
      game.currentScene.physics.config.gravity = ex.vec(0, 300);
      game.add(new Player())
  }
)