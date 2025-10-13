import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";


function App() {

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {/* <AuthProvider> */}
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Project/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </main>
          <Footer />
        </div>
      {/* </AuthProvider> */}
    </>
  )
}

export default App
