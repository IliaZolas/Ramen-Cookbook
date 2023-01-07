import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Ramen from './pages/ramen';
import NewRamen from './pages/newRamen';
import UpdateRamen from './pages/updateRamen';
import ShowRamen from './pages/showRamen';
import AddUser from './pages/signup';
import LoginUser from './pages/login';
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
          <Route path="/ramen/update/:id" element={<UpdateRamen />} />
          <Route path="/ramen/show/:id" element={<ShowRamen />} />
          <Route path="/signup" element={<AddUser />} />
          <Route path="/login" element={<LoginUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
