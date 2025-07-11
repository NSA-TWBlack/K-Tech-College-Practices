import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import CreateTask from "./pages/TaskManagement/CreateTask";
import MyTask from "./pages/TaskManagement/MyTask";
import UpdateTask from "./pages/TaskManagement/UpdateTask";
import Login from "./pages/Login";
import { useState } from "react";
import { LoginContext } from "./context";

function App() {
  const [user, setUser] = useState(null);

  return (
    <LoginContext.Provider value={{ user: user, setUser: setUser }}>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />

          {user && <Route path="/tasks" element={<MyTask />} />}
          {user && <Route path="/create" element={<CreateTask />} />}
          {user && <Route path="/update/:id" element={<UpdateTask />} />}
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
