import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

type Props = {};

const RouterApp = (props: Props) => {
  function Nav() {
    return (
      <>
        <ul className="flex gap-3">
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? { color: "red" } : {})}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? { color: "red" } : {})}
            >
              About
            </NavLink>
          </li>
        </ul>
      </>
    );
  }

  function Layout() {
    return <div style={}></div>;
  }

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <hr />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterApp;
