import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import SignUp from './components/register';
import Dashboard from './components/dashboard';
import List from './components/list';
import LoginForm from './components/loginForm';
import ShowData from './components/showData';
import Personal from './components/personal';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list" element={<List />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/showdata" element={<ShowData />} />
        <Route path="/personal" element={<Personal/>} />



        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
