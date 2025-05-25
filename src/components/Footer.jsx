import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100039135222038">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/manishchauhan_____/?next=%2F">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/manish-chauhan-a43499211/">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://github.com/manishchauhan8222">
                <FaGithub size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">MANISH</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
