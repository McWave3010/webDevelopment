import React  from 'react';
import Home from "./components/Home";
import { BrowserRouter as Router , Route , Routes , useLocation} from 'react-router-dom';
import Login from "./components/Login";
import Register from './components/Register';
import Courses from './components/Courses';
import Header from "./components/Header";
import ProtectedRoute from './Protected/Protect';
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import './App.css';

function App()  {


  function HeaderWrapper() {
    const location = useLocation();
  
    // Do not show Header on the /dashboard route
    if (location.pathname === "/dashboard") {
      return null;
    }
  
    return <Header />;
  }

  return (
    <> 
     <Router>
      <HeaderWrapper/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/user/login' element={<Login/>}></Route>
          <Route path='/user/register' element={<Register/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
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
