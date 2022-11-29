import './App.css';
import Navbar from './components/navbar';
import Router from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Ramen Cookbook</h1>
    </div>
  );
}

export default App;
