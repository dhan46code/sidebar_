import react from 'react';
import {
  FaShoppingCart,
  FaHome,
  FaFacebookMessenger,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

export const links = [
  {
    id: 1,
    name: 'home',
    icon: <FaHome />,
    url: '/home',
  },
  {
    id: 2,
    name: 'product',
    icon: <FaShoppingCart />,
    url: '/product',
  },
  {
    id: 3,
    name: 'call center',
    icon: <FaFacebookMessenger />,
    url: '/call-center',
  },
  {
    id: 4,
    name: 'our office',
    icon: <FaShoppingCart />,
    url: '/our-office',
  },
];

export const sosmed = [
  {
    id: 1,
    url: 'https://facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://instagram.com',
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: 'https://linkedin.com',
    icon: <FaLinkedin />,
  },
];
