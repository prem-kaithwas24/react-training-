// App.jsx or App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Module1 from './Module1/List';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module1" element={<Module1 />} />
      </Routes>
    </Router>
  );
}

export default App;
