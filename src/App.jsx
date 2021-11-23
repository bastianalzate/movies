import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home/Home';


function App() {
  const { saludo } = useSelector(state => state)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Bienvenidos al /</h1>}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
