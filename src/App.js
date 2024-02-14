import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Error from './pages/error/Error'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Gallery from './pages/gallery/Gallery';
import Service from './pages/service/Service';
import Contact from './pages/contact/Contact';
import './global.css';
import Navbar from './components/nav/Navbar';
import Details from './pages/home/photos/Details';
import Loader from './components/loader/Loader';
function App() {
  return (
    <>
    <Router>
      
      <Navbar/>
      <Loader/>
      <Routes>
        <Route path='*' element={<Error/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
