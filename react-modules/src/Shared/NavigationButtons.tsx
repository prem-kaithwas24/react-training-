import { useNavigate } from 'react-router-dom'

function NavigationButtons({previous, next}: {previous: string, next: string}) {
  const navigate = useNavigate()
  
  return (
    <div className="module1-button-container">
    <button className="module1-button" onClick={() => {
      navigate(previous)
    }}>Previous Module</button>

    <button className="module1-button" onClick={() => {
      navigate(next)
    }}>Next Module</button>
  </div>
  )
}

export default NavigationButtons