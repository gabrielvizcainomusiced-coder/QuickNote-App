import React from "react";

function Header() {
  return (
    <header className="app-header">
      <h1 className="logo">
        Quick
        <span className="bolt-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
          </svg>
        </span>
        Note
      </h1>
    </header>
  );
}

export default Header;
