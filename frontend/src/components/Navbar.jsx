import { FaSchool } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Report Issue", path: "/report-issue" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Contact", path: "/contact" },
    { name: "Admin", path: "/admin" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <FaSchool className="text-3xl text-indigo-600" />
            <h1 className="text-2xl font-bold text-slate-900">
              SchoolFix
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`font-medium transition ${
                    location.pathname === link.path
                      ? "text-indigo-600"
                      : "text-slate-700 hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Auth Button */}
          <div className="hidden lg:block">
            {token ? (
              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="px-6 py-5">

            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-3 rounded-lg transition ${
                      location.pathname === link.path
                        ? "bg-indigo-50 text-indigo-600 font-semibold"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5">
              {token ? (
                <button
                  onClick={handleLogout}
                  className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Login
                </Link>
              )}
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;