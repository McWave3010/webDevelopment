import React  from 'react';
import Home from "./components/Home";
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Login from "./components/Login";
import Register from './components/Register';
import Courses from './components/Courses';
import Header from "./components/Header";
import ProtectedRoute from './Protected/Protect';
import './App.css';



function App()  {


  return (
    <> 
     <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/user/login' element={<Login/>}></Route>
          <Route path='/user/register' element={<Register/>}></Route>
          <Route path='/courses' element={
            <ProtectedRoute>
              <Courses src="https://www.youtube.com/embed/kUMe1FH4CHE" title="Learn HTML – Full Tutorial for Beginners (2022)"/>
            </ProtectedRoute>
          }>
            </Route>
        </Routes>
     </Router>
    </>
  );
}

export default App;
