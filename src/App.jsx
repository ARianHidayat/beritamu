import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';


function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((tema) => (tema === 'dark' ? 'light' : 'dark'));
  };

  const backgroundColor = theme === 'dark' ? '#454545' : '#ffffff';
  const textColor = theme === 'dark' ? 'text-white' : 'text-dark';

  return (
    <div
      className={`vh-100 vw-100 overflow-auto text-center ${textColor}`}
      style={{ backgroundColor }}
    >
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <div className="mt-5" style={{ padding: '0 5% 0 5%' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
