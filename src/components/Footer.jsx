import React from 'react';

function Footer() {
  return (
    <>
      <footer>
        <div className="container flex footer-container justify-around">
          <a href="#" className="company-logo">
           <h1>LOGO</h1>
          </a>

          <div className="link-company">
            <h4>Product</h4>
            <a href="#" className="hover-link">Overview</a>
            <a href="#" className="hover-link">Pricing</a>
            <a href="#" className="hover-link">UsabilityHub</a>
            <a href="#" className="hover-link">Customer Page</a>
            <a href="#" className="hover-link">Status Page</a>
          </div>

          <div className="link-company">
            <h4>Methodology</h4>
            <a href="#" className="hover-link">Overview</a>
            <a href="#" className="hover-link">Pricing</a>
            <a href="#" className="hover-link">UsabilityHub</a>
            <a href="#" className="hover-link">Customer Page</a>
            <a href="#" className="hover-link">Status Page</a>
          </div>

          <div className="link-company">
            <h4>Resources</h4>
            <a href="#" className="hover-link">Overview</a>
            <a href="#" className="hover-link">Pricing</a>
            <a href="#" className="hover-link">UsabilityHub</a>
            <a href="#" className="hover-link">Customer Page</a>
            <a href="#" className="hover-link">Status Page</a>
          </div>

           <div className="link-company">
            <h4>Markets</h4>
            <a href="#" className="hover-link">Overview</a>
            <a href="#" className="hover-link">Pricing</a>
            <a href="#" className="hover-link">UsabilityHub</a>
            <a href="#" className="hover-link">Customer Page</a>
            <a href="#" className="hover-link">Status Page</a>
          </div>
        </div>
      </footer>

      {/* Sub-footer */}
      <div className="subfooter">
        <div className="container flex subfooter-container">
          <a className="hover-link" href="#">Privacy Policy</a>
          <a className="hover-link" href="#">Terms & Conditions</a>
          <a className="hover-link" href="#">Security Information</a>
          <a className="hover-link" href="#"><i className="fa-brands fa-facebook"></i></a>
          <a className="hover-link" href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </>
  );
}

export default Footer;
