import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Water from './pages/water';
import Avarage from './pages/media'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/water" element={<Water />} />
        <Route path="/avarage" element={<Avarage />} />
      </Routes>
    </Router>
  );
}

export default App;
