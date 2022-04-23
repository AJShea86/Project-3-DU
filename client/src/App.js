import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css';
import Main from './pages/Main';
import Footer from './components/Footer';
import { setContext } from '@apollo/client/link/context';
import Matches from './pages/Matches';
import Profile from "./pages/Profile"
import Auth from './utils/auth'
import NotLoggedIn from './components/NotLoggedIn';
import React, {useState, useEffect} from 'react';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
	uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem("id_token");
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
  const [loggedin, setLoggedIn] = useState(false)
  useEffect(()=>{
    if(Auth.loggedIn())setLoggedIn(true) 

  }, [])



  if(!loggedin) {
    return   (  <ApolloProvider client={client}>
    <Router>
      <NavBar />
      <Footer />
      <Routes>
     
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/main' element={<NotLoggedIn/>}/>
       <Route path ='/profile' element={<NotLoggedIn/>}/>
       <Route path='/matches' element={<NotLoggedIn/>}/>



      </Routes>
   </Router>
  </ApolloProvider>
  );

  }

  return (
    <ApolloProvider client={client}>
    <Router>
      <NavBar />
      <Footer />
      <Routes>
     
       <Route path='/main' element={<Main/>}/>
       <Route path ='/profile' element={<Profile/>}/>
       <Route path='/matches' element={<Matches/>}/>

      </Routes>
   </Router>
  </ApolloProvider>
  );
}

export default App;
