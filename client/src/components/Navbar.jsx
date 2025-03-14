import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Navigate = useNavigate()

  return (
    <nav className="navbar bg-gray-950 text-white py-6.5 px-6 lg:px-48 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-wide cursor-pointer" onClick={()=>Navigate('/')}>Resume AI</h3>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/docs">Docs</NavItem>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-md py-4">
          <ul className="text-center space-y-4">
            <NavItem to="/" closeMenu={() => setIsOpen(false)}>
              Home
            </NavItem>
            <NavItem to="/docs" closeClick={() => setIsOpen(false)}>
              Docs
            </NavItem>
          </ul>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ to, children, closeClick }) => (
  <li className="list-none text-[18px] hover:text-teal-900 none">
    <Link
      to={to}
      className="block px-4 text-white py-2 transition duration-300"
      onClick={closeClick}
    >
      {children}
    </Link>
  </li>
);

export default Navbar;
