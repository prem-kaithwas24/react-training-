import { useState } from 'react'
import SmileWebPng from '../assets/smile.webp'
import SadWebPng from '../assets/sad.webp'
import TrumpWebPng from '../assets/trump.webp'
import SuperHappyHappy100Web from '../assets/SuperHappyHappy.webp'

import NavigationButtons from '../Shared/NavigationButtons'

function MoodScale() {
  const [moodValue, setMoodValue] = useState(50);

  const showMood = (value: number) => {
    switch (true){
      case value < 10:
        return TrumpWebPng
      case value < 30:
        return SadWebPng
      case value < 60:
        return SmileWebPng
      case value <= 100:
        return SuperHappyHappy100Web
      default:
        return SmileWebPng
    }
  }

  return (
    <div className="module-container">
      <h1>module 3 | Mood Scale</h1>
      <div>
        <img height={300} width={300} src={showMood(moodValue)} alt="Smile" />
      </div>
      <div className="module3-input-container">
        Set the mood:
        <input type="range" min={0} max={100} value={moodValue} onChange={(e) => setMoodValue(parseInt(e.target.value))} />
        <p>Mood: {moodValue}</p>
      </div>
      <NavigationButtons previous="/module2" next="/module4" />
    </div>
  )
}

export default MoodScale