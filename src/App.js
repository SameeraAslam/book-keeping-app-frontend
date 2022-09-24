import './App.css';
import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import AddBook from './components/books/AddBook';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import GetBooks from './components/books/GetBooks';
import EditBook from './components/books/EditBook';
import Profile from './components/Profile';
import Register from './components/users/Register';
import Login from "./components/users/Login";



function App() {

 

  return (
    <>
  <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/addBooks" element={ <PrivateRoute><AddBook/></PrivateRoute>} />
        <Route path="/books" element={<PrivateRoute><GetBooks /></PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute><EditBook/></PrivateRoute>} />
      
      </Routes>
   
    
    </>
  );
  }

export default App;
