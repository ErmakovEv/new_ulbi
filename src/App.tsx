import { Link, Route, Routes } from 'react-router-dom';
import { Suspense, useContext } from 'react';
import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import MainPageAsync from './pages/MainPage/MainPage.async';
import { Theme, ThemeContext } from './theme/ThemeContext';
import UseTheme from './theme/useTheme';
import { classNames } from './helpers/classNames';

function App() {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to="/">Main</Link>
      <Link to="about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;