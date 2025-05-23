import React from 'react'
import { useNavigate } from 'react-router-dom'

function List() {
  const navigate = useNavigate()
  const list = [
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Attend Team Standup', completed: false },
    { id: 3, title: 'Complete Project Documentation', completed: false },
    { id: 4, title: 'Review Pull Requests', completed: false },
    { id: 5, title: 'Update Development Environment', completed: false },
    { id: 6, title: 'Write Unit Tests', completed: false },
    { id: 7, title: 'Deploy to Staging', completed: false },
  ]
  return (
    <div className="module1-container">
      <div className="module1-title">Module 1</div>
    
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      <div className="module1-button-container">
        <button className="module1-button" onClick={() => {
          navigate('/')
        }}>Home</button>

        <button className="module1-button" onClick={() => {
          navigate('/module2')
        }}>Next Module</button>
      </div>

    </div>  
  )
}

export default List