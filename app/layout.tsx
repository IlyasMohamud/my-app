import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css'; 

// Define an interface for the component props
interface LayoutProps {
  children: React.ReactNode; // Define children prop type
}

const Layout: React.FC<LayoutProps> = ({ children }) => { 
  return (
    <div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/#contact">Contact</Link>
      </div>
      <div className="main-content">{children}</div>
      <div className="footer" id="contact">
        Your contact info and social media links here.
      </div>
    </div>
  );
};

export default Layout;
