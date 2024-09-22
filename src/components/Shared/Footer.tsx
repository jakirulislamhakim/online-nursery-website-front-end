import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Container from '../../utils/Container';

const Footer = () => {
   return (
      <div className="bg-green-200 text-base-content rounded-t-[50px]  border-t border-black  mt-12">
         <Container>
            <footer>
               <div className="footer p-10 md:justify-between">
                  <div>
                     <span className="footer-title">About Us</span>
                     <Link to="/our-story" className="link link-hover">
                        Our Story
                     </Link>
                     <Link to="/contact" className="link link-hover">
                        Contact
                     </Link>
                     <Link to="/careers" className="link link-hover">
                        Careers
                     </Link>
                     <Link to="/press-kit" className="link link-hover">
                        Press Kit
                     </Link>
                  </div>
                  <div>
                     <span className="footer-title">Products</span>
                     <Link to="/products/plants" className="link link-hover">
                        Plants
                     </Link>
                     <Link to="/products/seeds" className="link link-hover">
                        Seeds
                     </Link>
                     <Link to="/products/tools" className="link link-hover">
                        Gardening Tools
                     </Link>
                     <Link to="/products/fertilizers" className="link link-hover">
                        Fertilizers
                     </Link>
                  </div>
                  <div>
                     <span className="footer-title">Customer Service</span>
                     <Link to="/faq" className="link link-hover">
                        FAQs
                     </Link>
                     <Link to="/shipping" className="link link-hover">
                        Shipping
                     </Link>
                     <Link to="/returns" className="link link-hover">
                        Returns
                     </Link>
                     <Link to="/plant-care-guide" className="link link-hover">
                        Plant Care Guide
                     </Link>
                  </div>
                  <div>
                     <span className="footer-title">Stay Connected</span>
                     <div className="grid grid-flow-col gap-4">
                        <a
                           href="https://x.com/j_I_hakim"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Twitter className="w-6 h-6" />
                        </a>
                        <a
                           href="https://www.youtube.com/@jakirulislamhakim1"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Youtube className="w-6 h-6" />
                        </a>
                        <a
                           href="https://web.facebook.com/jakirulIslamHakim1"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Facebook className="w-6 h-6" />
                        </a>
                        <a
                           href="https://www.instagram.com/jakirul_islam_hakim/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Instagram className="w-6 h-6" />
                        </a>
                     </div>
                  </div>
               </div>
            </footer>
         </Container>{' '}
         <div className="text-center py-4 bg-base-300 font-semibold text-xs px-2">
            <p>
               © Copyright {new Date().getFullYear()}, Alisha Nursery Plants BD | All
               Rights Reserved | Customized By Jakirul Islam Hakim
            </p>
         </div>
      </div>
   );
};

export default Footer;
