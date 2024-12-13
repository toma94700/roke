import { useEffect, useRef } from "preact/hooks";
import { Flags, Engine, Color, Loader, ImageSource } from "excalibur";
import { Player } from "./player";
import { idleMan } from "./resources";
import { Motion } from '@capacitor/motion';

Flags.useCanvasGraphicsContext();

const GameEngine = ({ setCount }) => {
  const engineRef = useRef();
  const playerRef = useRef(); // Reference to the player object

  useEffect(() => {
    const game = new Engine({
      width: 400,
      height: 500,
      backgroundColor: Color.fromHex("#54C0CA"),
      pixelArt: true,
      pixelRatio: 2,
      canvasElement: engineRef.current,
    });

    const loader = new Loader([idleMan]);

    const player = new Player();
    playerRef.current = player; // Keep a reference to the player
    game.add(player);

    // DeviceMotionEvent.requestPermission();
    // Handle device motion to change the player's angle
    Motion.addListener('accel', (event) => {
    
      // const { alpha, beta, gamma } = event; // Assume 'alpha' represents the desired angle change
      const { x, y, z } = event.accelerationIncludingGravity;

      setCount( `${Math.round(x)}, ${Math.round(y)}, ${Math.round(z)}` );
      // console.log( `x: ${x
      if (playerRef.current) {
        playerRef.current.rotation = x / 20 * Math.PI // Convert degrees to radians
      }
    });

    game.start(loader);

    return () => {
      Motion.removeAllListeners();
    };
  }, []);

  return <canvas ref={engineRef} width={800} height={600} />;
};

export default GameEngine;
