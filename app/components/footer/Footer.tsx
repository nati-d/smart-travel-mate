// components/Footer.js

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../navbar/Logo";

const Footer = () => {
  return (
    <footer
      className="text-white py-8"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGJhY2tncm91bmR8ZW58MHx8fHwxNjk2ODQzNTA2&ixlib=rb-1.2.1&q=80&w=1080)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-60 py-8">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Logo */}
          <Logo />

          {/* Right Side - Social Media Links */}
          <div className="flex space-x-6 justify-center w-full md:w-auto">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center text-sm mt-6">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="mt-2">
            <a
              href="#"
              className="text-white mx-2 hover:text-gray-200 transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white mx-2 hover:text-gray-200 transition"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white mx-2 hover:text-gray-200 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
