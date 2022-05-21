import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/layout/navbar.js';
import Home from './view/home.js';
import Login from './view/login.js';
import Paquete from './view/paquete.js';
import Empresa from './view/empresa.js'
import Mapa from './view/mapa.js'

function App() {
  return (
    <div className="App anim p-0">
      <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/Paquetes/'} element={<Paquete/>}/>
            <Route path={'/Empresas/'} element={<Empresa/>}/>
            <Route path={'/Mapa/'} element={<Mapa/>}/>
            <Route path={'/Login/'} element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
