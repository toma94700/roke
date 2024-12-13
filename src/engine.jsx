import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { Engine } from 'excalibur';

const GameEngine = () => {
  const engineRef = useRef();

  useEffect(() => {
    const game = new Engine({
      canvasElement: engineRef.current
    });
    game.start();
  }, []);

  return <canvas ref={engineRef} width={800} height={600} />;
};

export default GameEngine;