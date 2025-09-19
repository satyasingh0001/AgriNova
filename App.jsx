import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Sensors from "./pages/Sensors";
import Crops from "./pages/Crops";
import Water from "./pages/Water";
import Irrigation from "./pages/Irrigation";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (user) => {
    if (user.trim() !== "") {
      setUsername(user);
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setUsername("");
    setLoggedIn(false);
  };

  return (
    <>
      {loggedIn && (
        <Navbar
          loggedIn={loggedIn}
          username={username}
          onLogout={handleLogout}
        />
      )}
      <Layout
        loggedIn={loggedIn}
        username={username}
        onLogin={handleLogin}
        onLogout={handleLogout}
      >
        {loggedIn && (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sensors" element={<Sensors />} />
            <Route path="/crops" element={<Crops />} />
            <Route path="/water" element={<Water />} />
            <Route path="/irrigation" element={<Irrigation />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        )}
      </Layout>
    </>
  );
}

export default App;
