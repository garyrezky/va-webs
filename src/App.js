import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from './router/routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
