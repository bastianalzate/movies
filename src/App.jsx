import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const { saludo } = useSelector(state => state)
  return (
    <div className="App">
      <header className="App-header">
        <p>
         {saludo}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
