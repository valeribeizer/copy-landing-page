import React from "react";
import "./style.css";
import Modal from "../Brands/Modal";
import Popup from "reactjs-popup";

const Navbar = () => {
  const links = [
    { link: "HOME APPLIANCE REPAIR", href: "#HAR" },
    { link: "COMMERCIAL APPLIANCE REPAIR", href: "#CAR" },
    { link: "HVAC REPAIR", href: "#HR" },
    { link: "BRANDS", href: "#BR" },
    { link: "COVERAGE AREA", href: "#CA" },
    { link: "PRICES", href: "#PR" },
    { link: "ABOUT ABV", href: "#AA" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="#home">
          <img src="logo.svg" alt="logo" width="42px" height="36.31px"></img>
        </a>
        <div className="links-group">
          <div className="links-line">
            {links.map(({ link, href }, index) => {
              return (
                <a key={`${index}`} className="item custom" href={href}>
                  {link}
                </a>
              );
            })}
          </div>
          <div className="btn-group">
            <div className="number-stack">
              <span className="custom-2">(240) 630-0794</span>
              <span className="custom-1">Order a callback</span>
            </div>

            <button type="button" className="custom-3">
              <Popup
                trigger={<span className="custom-4">Book online</span>}
                modal
              >
                {(close) => (
                  <div>
                    <Modal
                      src={""}
                      onClick={() => {
                        close();
                      }}
                    />
                  </div>
                )}
              </Popup>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
