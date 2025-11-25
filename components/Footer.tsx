import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">STI College Calamba</h3>
            <p className="text-sm leading-relaxed mb-4">
              Nurturing the next generation of digital creatives through our Bachelor of Multimedia Arts program. Excellence in design, animation, and digital storytelling.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sti-yellow transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-sti-yellow transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-sti-yellow transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-sti-yellow shrink-0" />
                <span>Uno Uno Bldg., National Highway, Calamba City, Laguna</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-sti-yellow shrink-0" />
                <span>(049) 545-0000</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-sti-yellow shrink-0" />
                <span>admissions@calamba.sti.edu.ph</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#/about" className="hover:text-white transition-colors">About BMMA</a></li>
              <li><a href="#/facilities" className="hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#/faculty" className="hover:text-white transition-colors">Faculty</a></li>
              <li><a href="#/contact" className="hover:text-white transition-colors">Admissions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} STI College Calamba - BMMA Department. All rights reserved.</p>
          <p className="mt-2 text-gray-500">Student Project Submission.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;