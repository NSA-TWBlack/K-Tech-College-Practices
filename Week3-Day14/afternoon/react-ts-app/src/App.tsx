import "./App.css";
import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router";
import CreateTask from "./pages/TaskManagement/CreateTask";
import MyTask from "./pages/TaskManagement/MyTask";
import UpdateTask from "./pages/TaskManagement/UpdateTask";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { LoginContext } from "./context";
import DashboardLayout from "./layouts/DashboardLayout";

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
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<MyTask />} />
            <Route path="create-task" element={<CreateTask />} />
            <Route
              path="update/:id"
              element={
                <UpdateTask
                  open={false}
                  onClose={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
