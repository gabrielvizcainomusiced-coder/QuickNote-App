import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
  <span className="footer-content">
    © {year} <span className="bolt-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    </span> Gabriel Vizcaino
  </span>
</footer>

  );
}

export default Footer;
