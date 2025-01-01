'use client'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Home from "@/pages/dashboard/home";
import About from "@/pages/dashboard/about";
import Contact from "@/pages/dashboard/contact";
import Layout from "@/components/layout";
export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
