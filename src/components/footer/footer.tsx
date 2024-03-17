import {
  FaFacebookF,
  FaSquareXTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";
const Footer = () => {
  const SocialMediaIcons = [
    { icon: FaFacebookF, color: "black" },
    { icon: FaSquareXTwitter, color: "green" },
    { icon: FaInstagram, color: "pink" },
    { icon: FaGithub, color: "black" },
  ];

  const getYear = new Date().getFullYear();
  //   console.log(getYear);

  return (
    <>
      <div className="bottom-0 p-10">
        <div className="flex flex-col justify-center items-center space-y-10">
          <div className="flex justify-center items-center space-x-3 lg:space-x-16">
            {SocialMediaIcons.map((item, index) => (
              <item.icon
                key={index}
                size={30}
                className={`transition-transform text-white duration-300 ease-in-out transform hover:scale-90 cursor-pointer hover:text- {item.color}`}
              />
            ))}
          </div>
          <div className="flex-1 justify-center items-center">
            <p className="font-bold text-white">
              © {getYear}. All rights reserved. | Designed and developed by
              Rishabh Nirmalkar
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
