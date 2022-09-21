import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Weather from './components/Weather/Weather';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import LiveCameras from './components/LiveCameras/LiveCameras';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/weather' element={<Weather></Weather>}></Route>
        <Route path='/liveVideo' element={<LiveCameras></LiveCameras>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
