import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";


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
            </Routes>
          </main>
          <Footer />
        </div>
      {/* </AuthProvider> */}
    </>
  )
}

export default App
