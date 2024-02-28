import Home from './views/Home';
import Favs from './views/Favoritos';
import Cart from './views/Cart';
import Access from './views/Access';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Publicar from './views/Publicar';
import Ventas from './views/ventas';
import Registro from './views/Registro';
import "./assets/css/App.css"
import Sidebar from './components/Sidebar';
import "./assets/css/Sidebar.css"
import Profile from './views/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <label class="hamburger-menu">
        <input type="checkbox" />
      </label>
      <Sidebar />
      <Routes>
        <Route path='Access' element={<Access />} />
        <Route path='Registro' element={<Registro />}/>
        <Route path='/' element={<Home />} />
        <Route path='Ventas' element={<Ventas />}/>
        <Route path='Favs' element={<Favs />}/>
        <Route path='Publicar' element={<Publicar />}/>
        <Route path='Cart' element={<Cart />}/>
        <Route path='Profile' element={<Profile />}/>
      </Routes>
      </ BrowserRouter>
    </div>
  );
}

export default App;
