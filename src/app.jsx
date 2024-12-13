import { useState } from 'preact/hooks'
import './app.css'
import GameEngine from './engine'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
      </div>
      <GameEngine setCount={setCount} />  
    </>
  )
}
