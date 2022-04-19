import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <>
    <NavBar/>
    <div>
      <Home/>
    </div>
    </>
  //  <Router>
     
  //    <Routes>
     
  //     <Route path='/' element='Hi'/>
  //     <Route path='/what' element='Whats Up'/>

  //    </Routes>
  //  </Router>

      
  
  );
}

export default App;
