import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Weather from './components/Weather/Weather';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='lg:mx-24 mx-4'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/weather' element={<Weather></Weather>}></Route>
      </Routes>
    </div>
  );
}

export default App;
