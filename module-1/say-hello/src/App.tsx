import './App.css'

function App() {

  const list = [
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Attend Meetings', completed: false },
    { id: 3, title: 'Raise a child', completed: false },
    { id: 4, title: 'Buy a house', completed: false },
    { id: 5, title: 'Buy a car', completed: false },
    { id: 6, title: 'Buy a boat', completed: false },
    { id: 7, title: 'Buy a plane', completed: false },
    { id: 8, title: 'Buy a horse', completed: false },
    { id: 9, title: 'Buy a horse', completed: false },
    { id: 10, title: 'Buy a horse', completed: false },
  ]

  return (
    <>
      <h1>Bucket List</h1>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
