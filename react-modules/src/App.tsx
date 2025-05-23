// App.jsx or App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Module1 from './Module1/List';
import { default as Module2 } from './Module2/Index';
import { default as Module3 } from './Module3/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module1" element={<Module1 />} />
        <Route path="/module2" element={<Module2 />} />
        <Route path="/module3" element={<Module3 />} />
      </Routes>
    </Router>
  );
}

export default App;
