import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

          {/* Facebook Link */}
          <div className="text-center md:text-left">
            <a href="https://www.facebook.com/VmTintsWraps/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors duration-300">
              Facebook
            </a>
          </div>

          {/* Instagram Link */}
          <div className="text-center md:text-left">
            <a href="https://www.instagram.com/vm_tintsandwraps/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors duration-300">
              Instagram
            </a>
          </div>

          {/* Phone Number */}
          <div className="text-center md:text-left">
            <a href="tel:+1234567890" className="text-white hover:text-primary transition-colors duration-300">
              +44 (0)7493 939286
            </a>
          </div>

          {/* Location */}
          <div className="text-center md:text-left">
          <a href="https://www.google.com/maps/place/VM+Tints%26Wraps/@55.8537415,-4.1932748,17z/data=!3m1!4b1!4m6!3m5!1s0x488841bdfba433e1:0xd86f728ae2001d14!8m2!3d55.8537385!4d-4.1906945!16s%2Fg%2F11kq012nb_?entry=ttu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors duration-300">
          317-349 Shettleston Rd, Glasgow G31 5JL
            </a>
          </div>
                    {/* Location */}
                    <div className="text-center md:text-left">
          <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors duration-300">
          info@vmtints.co.uk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
