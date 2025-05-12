import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo } from '../data/contact';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-[#1877F2]' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-[#1DA1F2]' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-[#E4405F]' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-[#0A66C2]' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Services', path: '/services' },
    { name: 'Map', path: '/map' }
  ];

  const emergencyNumber = contactInfo.phone.emergency;

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Emergency Banner */}
      <div className="bg-blue-600 text-white py-3">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-2">
            <Phone className="w-5 h-5 animate-pulse" />
            <span className="font-medium">24/7 Emergency:</span>
            <a 
              href={`tel:${emergencyNumber}`}
              className="font-bold hover:underline"
            >
              {emergencyNumber}
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 flex items-center">
              About Us
            </h3>
            <p className="text-gray-400 mb-6">
              Bharati Vidyapeeth Dental College and Hospital is committed to excellence 
              in dental education and patient care, serving our community since 1989.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-800 p-2 rounded-full ${social.color} transition-colors duration-300 group`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`tel:${contactInfo.phone.main}`}
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mr-3 text-blue-500" />
                  <span>{contactInfo.phone.main}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${contactInfo.email.general}`}
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-3 text-blue-500" />
                  <span>{contactInfo.email.general}</span>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">
                  {contactInfo.address.line1},
                  <br />
                  {contactInfo.address.line2},
                  <br />
                  {contactInfo.address.city} - {contactInfo.address.pincode}
                </span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Office Hours</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-3 text-blue-500" />
                <div>
                  <p className="font-medium text-white">Weekdays</p>
                  <p>{contactInfo.officeHours.weekdays}</p>
                </div>
              </li>
              <li className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-3 text-blue-500" />
                <div>
                  <p className="font-medium text-white">Saturday</p>
                  <p>{contactInfo.officeHours.saturday}</p>
                </div>
              </li>
              <li className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-3 text-blue-500" />
                <div>
                  <p className="font-medium text-white">Sunday</p>
                  <p>{contactInfo.officeHours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Bharati Vidyapeeth Dental College. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}