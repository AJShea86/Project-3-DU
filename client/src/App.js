import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css';
import Main from './pages/Main';
import Footer from './components/Footer';

import React from 'react';
import { render } from "react-dom";
import { ApolloProvider } from '@apollo/client';
import { 
  ApolloClient, 
  gql,
  InMemoryCache,
  useQuery, 
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
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
  </ApolloProvider>
  );
}

export default App;
