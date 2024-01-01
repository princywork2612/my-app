
import './App.css';
import Navbar from './componants/Navbar.js';
import TextForm from './componants/TextForm.js';
import About from './componants/About.js';
import { useState } from 'react';
import Alert from './componants/Alert.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');//by defult light mode
  const [alert, setAlert] = useState(null);
  const showalert=(message,type)=>
  {
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1300);
  }
  const togglemode=()=>
  {
    
    if(mode === 'light')
    {
    setMode('dark')
    const navbarElement = document.querySelector('.navbar');
    navbarElement.style.backgroundColor = '';

    document.body.style.backgroundColor='#343a40';
    document.body.style.color='white';
    showalert("You Enable Dark Mode","Success")

    }
   
    else
    {
    setMode('light')
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    showalert("You Enable Light Mode","Success")

    }
  }
  const togglemodepink=()=>
  {
    
    if(mode === 'light')
    {
    setMode('green')
    const navbarElement = document.querySelector('.navbar');
    navbarElement.style.backgroundColor = '#2e4b6b'; // Adjust the color as needed

    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach((button) => {
      button.style.backgroundColor = '#2e4b6b';
    });

  
    document.body.style.backgroundColor='#9bb7d4';
    document.body.style.color='black';
    showalert("You Enable Pink Mode","Success")

    }
   
    else
    {
    setMode('light')
    
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    showalert("You Enable Light Mode","Success")

    }
  }
  return (
  <>
  <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} togglemodepink={togglemodepink}></Navbar>
      <Alert alert={alert}/> 
      <div className="container mt-3">
      
        <Routes>
              <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" />} />
              <Route exact path="/About" element= {<About />} />      

        </Routes>
    </div>
  </Router>
  </>
  );
}

export default App;
