import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "Chala Temesgen",
    title: "Full Stack Developer",
    image: "/assets/profile.jpg",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  return (
    <nav className="bg-gray-900 shadow-md py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar container */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-white font-bold text-lg hover:text-yellow-300 transition duration-200"
          >
            Portiflex
          </Link>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/about"
              className="text-white hover:text-yellow-300 transition duration-200 font-medium"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-yellow-300 transition duration-200 font-medium"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-300 transition duration-200 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Profile (Right Section - Always visible on desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <input
              type="file"
              accept="image/*"
              id="profileImageInput"
              className="hidden"
              onChange={handleImageChange}
            />
            <img
              src={profile.image}
              alt={profile.name}
              onClick={() =>
                document.getElementById("profileImageInput").click()
              }
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform duration-200"
            />
            <div className="flex flex-col text-right">
              <span className="text-white font-semibold">{profile.name}</span>
              <span className="text-sm text-white/80">{profile.title}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 transition-all duration-300">
          <div className="flex flex-col space-y-3 px-6 py-4">
            <Link
              to="/about"
              className="text-white hover:text-yellow-300 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-yellow-300 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-300 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            {/* Profile Section (Visible on mobile menu) */}
            <div className="flex items-center space-x-3 border-t border-gray-700 pt-3">
              <input
                type="file"
                accept="image/*"
                id="mobileProfileImageInput"
                className="hidden"
                onChange={handleImageChange}
              />
              <img
                src={profile.image}
                alt={profile.name}
                onClick={() =>
                  document.getElementById("mobileProfileImageInput").click()
                }
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
              />
              <div className="flex flex-col">
                <span className="text-white font-semibold">{profile.name}</span>
                <span className="text-sm text-white/80">{profile.title}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
