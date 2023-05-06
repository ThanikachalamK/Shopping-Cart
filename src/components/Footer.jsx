import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-links">
        <a href="mailto:contact_support@domain.com" target="_blank">
          Need any help?
        </a>
      </p>
      <p>
        &copy; {currentYear} <strong>Veggy</strong> - Organic Green Store
      </p>
    </footer>
  );
};

export default Footer;
