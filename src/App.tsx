import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [speed, setSpeed] = useState(0)

  const pedal = () => {
    setCount((count) => count + 1)
    setSpeed((speed) => Math.min(speed + 2, 30))
  }

  const brake = () => {
    setSpeed((speed) => Math.max(speed - 5, 0))
  }

  return (
    <>
      <section id="center">
        
        <div>
          <h1>🚲 Bicycle App</h1>
          <p>
            Pedal to move forward! Edit <code>src/App.tsx</code> to customize your ride
          </p>
        </div>
        <div className="controls">
          <button
            type="button"
            className="pedal-btn"
            onClick={pedal}
          >
            🦶 Pedal ({count} strokes)
          </button>
          <button
            type="button"
            className="brake-btn"
            onClick={brake}
          >
            🛑 Brake
          </button>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Bicycle Resources</h2>
          <p>Everything you need for your ride</p>
          <ul>
            <li>
              <a href="https://www.bikeexchange.com/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Buy a Bike
              </a>
            </li>
            <li>
              <a href="https://www.strava.com/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Track your Ride
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Cycling Community</h2>
          <p>Join fellow cyclists</p>
          <ul>
            <li>
              <a href="https://github.com/topics/cycling" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                Cycling Projects
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/cycling" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Cycling Discord
              </a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/cycling/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                r/Cycling
              </a>
            </li>
            <li>
              <a href="https://www.cyclingweekly.com/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Cycling News
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App