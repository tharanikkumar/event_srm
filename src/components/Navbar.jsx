import React, { useEffect } from 'react';
import './Navbar.scss'; // Import SCSS styles

const Navbar = () => {
  useEffect(() => {
    let i = 1;
    const stop = 4;

    const intervalId = setInterval(() => {
      if (i > stop) {
        clearInterval(intervalId);
        return;
      }
      document.getElementById(`len${i++}`).classList.add('bounce');
    }, 500);

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><a id="len1" className="hoverable" href="#">Home</a></li>
            <li><a id="len2" className="hoverable" href="#">About</a></li>
            <li><a id="len3" className="hoverable" href="#">Portfolio</a></li>
            <li><a id="len4" className="hoverable" href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div id="what-the-hell-is-this">
        <div className="page-title">
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
