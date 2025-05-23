import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-container">
      <p> Modules Index: </p>
      <Link to="/module1" className="home-link">Module 1</Link>
    </div>
  )
}

export default Home