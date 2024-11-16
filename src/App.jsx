import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import Game from './pages/Game';
import Showcase from './pages/Showcase';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </Router>
  );
};

export default App;