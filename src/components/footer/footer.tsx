import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

function footer() {
  const getYear = new Date().getFullYear();

  interface FooterLink {
    text: string;
    link: string;
  }
  const FooterLinks: FooterLink[] = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/about_us",
    },
    {
      text: "Blog",
      link: "/blogs",
    },
    {
      text: "Projects",
      link: "/projects",
    },
    {
      text: "Contact",
      link: "/contact_us",
    },
  ];

  return (
    <>
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
              Music School is a premier institution dedicated to teaching the
              art and science of music. We nurture talent from the ground up,
              fostering a vibrant community of musicians.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <ul>
              {FooterLinks.map((footer, index) => (
                <li key={index}>
                  <a
                    href={footer.link}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {footer.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <FaFacebookF size={25} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <FaXTwitter size={25} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={25} />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h2>
            <p>Raipur, Chattisgarh, India</p>
            <p>Raipur 492012</p>
            <p>Email: iamrishabhnirmalkar@gmail.com</p>
            <p>Phone: +91- 90988-53447</p>
          </div>
        </div>
        <p className="text-center text-xs pt-8">
          © {getYear} Rishabh Nirmalkar. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default footer;
