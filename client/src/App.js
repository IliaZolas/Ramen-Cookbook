import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Ramen from './pages/ramen';
import NewRamen from './pages/newRamen';
import UpdateRamen from './pages/updateRamen';
import ShowRamen from './pages/showRamen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ramen" element={<Ramen />} />
          <Route path="/new-ramen" element={<NewRamen />} />
          <Route path="/update-ramen" element={<UpdateRamen />} />
          <Route path="/ramen/:id" element={<ShowRamen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
