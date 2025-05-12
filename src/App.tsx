import { useEffect, useState } from 'react';
import './App.css'
import Form from './components/Form/Form'
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  }

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(status);
  }, [])

  return (
    <div>
      {
        isLoggedIn ? (
          <Dashboard onLogout={handleLogout}/>
        ) : (
          <Form onLogin={handleLogin} />
        )
      }
    </div>
  )
}

export default App
