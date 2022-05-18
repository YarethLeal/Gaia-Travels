import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/layout/navbar.js';
import Home from './view/home.js';
import Login from './view/login.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/Login/'} element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
