import React, { useContext, useEffect } from "react";
import { ResumeContext } from "../resumeContext/resumeContext.jsx";

const Footer = () => {
  const { checkBox, setCheckBox } = useContext(ResumeContext);

  // Load state from localStorage on mount
  useEffect(() => {
    const savedCheckBox = localStorage.getItem("resumeCheckBox");
    if (savedCheckBox !== null) {
      setCheckBox(JSON.parse(savedCheckBox)); 
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("resumeCheckBox", JSON.stringify(checkBox));
  }, [checkBox]);

  const handleCheckboxChange = (e) => {
    setCheckBox(e.target.checked);
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 py-8 px-4 mt-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Contact & Consent */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-100">Contact Me</h3>
            <a
              href="mailto:ayushghimire077@gmail.com"
              className="text-sm hover:text-blue-400 transition"
            >
              📧 ayushghimire077@gmail.com
            </a>

            {/* Checkbox */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="resumeCheckBox"
                checked={checkBox}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="resumeCheckBox" className="text-sm text-gray-300">
                Save my resume data
              </label>
            </div>
          </div>

          {/* Right Side - Social & Credits */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-100">
              Connect With Me
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/ayushghimiree"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 LinkedIn
              </a>
              <a
                href="https://github.com/ayushghimire077"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 GitHub
              </a>
            </div>

            <div className="border-t border-gray-700 pt-4">
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Ayush Ghimire
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
