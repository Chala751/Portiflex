import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // initial profile (placeholder)
  const [profile, setProfile] = useState({
    name: "Chala Temesgen",
    title: "Full Stack Developer",
    image: "/assets/profile.jpg", // make sure it exists in src/assets
  });

  // handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // create temporary image URL
      setProfile((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section (Links) */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-900 hover:text-gray-700 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-gray-700 font-medium">
              About
            </Link>
            <Link to="/projects" className="text-gray-900 hover:text-gray-700 font-medium">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-900 hover:text-gray-700 font-medium">
              Contact
            </Link>
          </div>

          {/* Right Section (Profile Info) */}
          <div className="flex items-center space-x-3">
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              id="profileImageInput"
              className="hidden"
              onChange={handleImageChange}
            />

            {/* Clickable profile image */}
            <img
              src={profile.image}
              alt={profile.name}
              className="w-10 h-10 rounded-full object-cover border border-gray-300 cursor-pointer hover:opacity-80 transition"
              onClick={() => document.getElementById("profileImageInput").click()}
            />

            <div className="flex flex-col text-right">
              <span className="text-gray-800 font-semibold">{profile.name}</span>
              <span className="text-sm text-gray-500">{profile.title}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
