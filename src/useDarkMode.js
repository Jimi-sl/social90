import { useEffect, useState } from 'react';
export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const setDarkTheme = () => {
    window.localStorage.setItem('theme', 'dark');
    setMode('dark');
  };
  const setLightTheme = () => {
    window.localStorage.setItem('theme', 'light');
    setMode('light');
  };
  

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('light');
    }
    setComponentMounted(true);
  }, []);

  return [theme,setDarkTheme,setLightTheme,componentMounted]
};