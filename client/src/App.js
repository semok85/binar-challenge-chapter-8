import LoginRegister from "./components/LoginRegister";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setUser(JSON.parse(storedToken));
    } else {
      setUser(null);
    }
  }, []);

  return <>{user ? <Dashboard /> : <LoginRegister />}</>;
}

export default App;
