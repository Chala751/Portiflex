import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <nav className="bg-gray-900 shadow-md py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo + Links */}
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-white font-bold text-lg hover:text-yellow-300 transition duration-200"
            >
              Portiflex
            </Link>
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

          {/* Right Section - Profile */}
          <div className="flex items-center space-x-3">
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
              onClick={() => document.getElementById("profileImageInput").click()}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform duration-200"
            />
            <div className="flex flex-col text-right">
              <span className="text-white font-semibold">{profile.name}</span>
              <span className="text-sm text-white/80">{profile.title}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
