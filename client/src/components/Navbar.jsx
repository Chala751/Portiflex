import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <Link to="/" className="text-gray-900 hover:text-gray-700">
                  Home
                </Link>
                <Link to="/about" className="text-gray-900 hover:text-gray-700">
                  About
                </Link>
                <Link to="/contact" className="text-gray-900 hover:text-gray-700">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
