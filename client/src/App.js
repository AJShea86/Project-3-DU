import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css';

function App() {
  return (
  
    <Router>
     <NavBar/>
      <Routes>
     
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>

      </Routes>
   </Router>

      
  
  );
}

export default App;
