// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header";
import Home from "./assets/pages/Home";
import Product from "./assets/pages/Product";
import Blog from "./assets/pages/Blog";
import Category from "./assets/pages/Category";
import Customer from "./assets/pages/Customer";
import Login from "./assets/pages/Login";
import Footer from "./assets/components/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
      <Footer />
    </Router>
  );
}
