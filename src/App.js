import './css/App.css';
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';
import GamePage from './components/Game';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Leaderboard />}/>
        <Route path='/leaderboard' element={<Leaderboard/>}/>
        <Route path='/game' element={<GamePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
