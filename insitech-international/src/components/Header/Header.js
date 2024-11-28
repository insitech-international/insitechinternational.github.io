import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div id="header-sticky" className="transparent-header header-area">
        <div className="header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5">
                <div className="logo mt-50 mb-50 transition5">
                  <a className="header-logo" href="index.html">
                    <img
                      src="images/logo/brand-logo.png"
                      alt="Insitech International"
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-7 pl-0 d-flex justify-content-end align-items-center">
                {/* Navigation component will be included here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
