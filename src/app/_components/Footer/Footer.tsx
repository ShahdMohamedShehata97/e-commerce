import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal
} from 'react-icons/fa';

import { 
  TbTruckDelivery, 
  TbRefresh, 
  TbShieldCheck, 
  TbHeadset 
} from 'react-icons/tb';

import { HiOutlineShoppingCart } from 'react-icons/hi';

// ================= Types =================
type FeatureItemProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

type FooterColumnProps = {
  title: string;
  links: string[];
};

type SocialIconProps = {
  icon: React.ReactNode;
};

// ================= Components =================
const FeatureItem = ({ icon, title, desc }: FeatureItemProps) => (
  <div className="flex items-center gap-4 px-4">
    <div className="bg-white p-3 rounded-full shadow-sm flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div className="min-w-0">
      <h4 className="font-bold text-gray-800 text-sm whitespace-nowrap">{title}</h4>
      <p className="text-xs text-gray-500 whitespace-nowrap">{desc}</p>
    </div>
  </div>
);

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="space-y-4">
    <h4 className="text-white font-bold text-lg">{title}</h4>
    <ul className="space-y-2 text-sm">
      {links.map((link, index) => (
        <li
          key={index}
          className="hover:text-green-500 cursor-pointer transition-colors"
        >
          {link}
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ icon }: SocialIconProps) => (
  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 cursor-pointer transition-all text-gray-300 hover:text-white">
    {icon}
  </div>
);

// ================= Main Footer =================
export default function Footer() {
  return (
    <footer className="w-full font-sans border-t border-gray-100">
      
      {/* ===== Features ===== */}
      <div className="bg-[#e9f7ef] py-2 mt-5 px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <FeatureItem 
          icon={<TbTruckDelivery className="text-2xl text-green-600" />} 
          title="Free Shipping" 
          desc="On orders over 500 EGP" 
        />

        <FeatureItem 
          icon={<TbRefresh className="text-2xl text-green-600" />} 
          title="Easy Returns" 
          desc="14-day return policy" 
        />

        <FeatureItem 
          icon={<TbShieldCheck className="text-2xl text-green-600" />} 
          title="Secure Payment" 
          desc="100% secure checkout" 
        />

        <FeatureItem 
          icon={<TbHeadset className="text-2xl text-green-600" />} 
          title="24/7 Support" 
          desc="Contact us anytime" 
        />
      </div>

      {/* ===== Main Footer ===== */}
      <div className="bg-[#0b121f] text-gray-400 py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Logo + Info */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="flex items-center gap-2 bg-white w-fit px-4 py-2 rounded-lg">
              <HiOutlineShoppingCart className="text-green-600 text-2xl" />
              <span className="text-[#0b121f] font-bold text-xl tracking-tight">
                FreshCart
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-sm">
              FreshCart is your one-stop destination for quality products.
              From fashion to electronics, we bring you the best brands
              at competitive prices.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-500" />
                <span>+1 (800) 123-4567</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-500" />
                <span>support@freshcart.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-500" />
                <span>123 Commerce Street, New York, NY 10001</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaYoutube />} />
            </div>
          </div>

          {/* Columns */}
          <FooterColumn 
            title="Shop" 
            links={['All Products', 'Categories', 'Brands', 'Electronics', "Men's Fashion", "Women's Fashion"]} 
          />

          <FooterColumn 
            title="Account" 
            links={['My Account', 'Order History', 'Wishlist', 'Shopping Cart', 'Sign In']} 
          />

          <FooterColumn 
            title="Support" 
            links={['Contact Us', 'Help Center', 'Shipping Info', 'Returns', 'Track Order']} 
          />

          <FooterColumn 
            title="Legal" 
            links={['Privacy Policy', 'Terms of Service', 'Cookie Policy']} 
          />
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          
          <p>© 2026 FreshCart. All rights reserved.</p>

          <div className="flex items-center gap-4 text-xl">
            <FaCcVisa className="hover:text-white transition-colors" />
            <FaCcMastercard className="hover:text-white transition-colors" />
            <FaCcPaypal className="hover:text-white transition-colors" />
          </div>

        </div>
      </div>
    </footer>
  );
}