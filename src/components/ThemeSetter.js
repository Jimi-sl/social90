import React from 'react'
import {string} from 'prop-types';
import {useDarkMode} from './../useDarkMode';


const ThemeSetter = () => {
  
  const array = useDarkMode();
  const setLightTheme = array[2];
  const setDarkTheme = array[1];
  const theme = array[0];


  return (
    <div className="theme-setter">
            
            <button onClick={setLightTheme}><svg className={theme === 'light'?'active':''} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg></button>
            <button onClick={setDarkTheme}><svg className={theme === 'dark'?'active':''} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></button>
    </div>
  );
};

ThemeSetter.propTypes = {
  theme: string.isRequired,
}

export default ThemeSetter;
