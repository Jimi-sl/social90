import React,{useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import RouterNav from './RouterNav.js';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { useDarkMode } from './useDarkMode';
import "./css/Main.css";
import './css/Mob.css';
import Nav from  './Nav.js';
import fakeAuth from './AuthCookie.js';



function App() {

  const array = useDarkMode();
  const theme = array[0];
  const componentMounted = array[3];
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [authentic,setAuthentic] = useState(fakeAuth.isAuthenticated);
  
  function handleChange(newValue) {
    setAuthentic(newValue);
  }

  

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
    {authentic ? <GlobalStyles /> : null}
    <Router>
  <div className="App">
    <div className="body-container">
      <RouterNav value={authentic} onChange={handleChange}/>
      </div>
    {authentic ? <Nav onChange={handleChange}/> : null}
  </div>
  </Router>
    </ThemeProvider>
  );
  
}

export default App;
