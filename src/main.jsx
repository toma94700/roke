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

game.add(new Player())
game.start(loader)