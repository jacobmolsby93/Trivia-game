import React from "react";
import globe from "../images/earth.png";
import github from "../images/github.png";
import coffee from "../images/coffee.png";

export default function Footer() {
  return (
    <footer class="footer">
      <nav>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-8 d-flex justify-content-center pb-3">
            <a href="https://www.buymeacoffee.com/msby" target="_blanks">
              <div className="d-flex align-items-center">
                <img
                  class="footer-icon-coffee"
                  src={coffee}
                  alt="Buy me a coffe logo"
                />
                <p class="text-white sub-title m-0 coffee ms-2">
                  Buy me a coffe :)
                </p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-8 d-flex justify-content-center mb-2">
            <a href="https://www.github.com/jacobmolsby93" target="_blank">
              <img src={github} class="footer-icon me-2" alt="github logo" />
            </a>
            <a href="https://www.msby.site" target="_blank">
              <img src={globe} class="footer-icon ms-2" alt="earth logo" />
            </a>
          </div>
          <div className="col-12 col-md-8 text-center d-flex justify-content-center">
            <p class="text-white mb-1 text-thin">
              Designed and created by Jacob Molsby
            </p>
          </div>
        </div>
      </nav>
    </footer>
  );
}
