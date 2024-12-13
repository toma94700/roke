import { render } from 'preact'
import  * as ex from "excalibur";
import "./index.css";
import { App } from './app.jsx'

render(<App />, document.getElementById('app'))

/* 
const game = new ex.Engine({
  width: 400,
  height: 500,
  backgroundColor: ex.Color.fromHex("#54C0CA"),
  pixelArt: true,
  pixelRatio: 2,
  displayMode: ex.DisplayMode.FitScreen,
});
game.start();

*/