import "./App.css";
import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreateTask from "./pages/TaskManagement/CreateTask";
import MyTask from "./pages/TaskManagement/MyTask";
import UpdateTask from "./pages/TaskManagement/UpdateTask";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { LoginContext } from "./context";

function App() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <LoginContext.Provider value={{ user: user, setUser: setUser }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />

          {user && <Route path="/tasks" element={<MyTask />} />}
          {user && <Route path="/create" element={<CreateTask />} />}
          {user && <Route path="/update/:id" element={<UpdateTask />} />}
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
