import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css';
import Main from './pages/Main';
import Footer from './components/Footer';

function App() {
  return (

    <Router>
     <NavBar/>
     <Footer/>
      <Routes>
     
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/main' element={<Main/>}/>





      </Routes>
   </Router>
  

   
  
  );
}

export default App;
