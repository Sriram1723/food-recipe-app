import './App.css';
import Home from './pages/home/index.jsx'
import Favourites from './pages/favourites/index.jsx'
import Details from './pages/details/index.jsx';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar.jsx';
import './styles.css'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
        <Route path='/recipe-item/:id' element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
