import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__item">
        <div class="footer__reserved">
          <p>
            Desarrollado por
            <strong>
              <a target="_blank"> ONDev</a>
            </strong>
          </p>
        </div>

        <div class="footer__social">
          <ul>
            <li>
              <a href="https://github.com/Nicovied0" target="_blank">
                {/* <svg
                  class="social__icons"
                  xmlns="http://www.w3.org/2000/svg"
                  xml:space="preserve"
                  version="1.1"
                  style="
                    shape-rendering: geometricPrecision;
                    text-rendering: geometricPrecision;
                    image-rendering: optimizeQuality;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                  "
                  viewBox="0 0 42.38 42.37"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
                >
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <g id="_1327170740320">
                      <path
                        fill="currentcolor"
                        d="M30.74 21.22c-0.88,2.2 -2.95,3.64 -5.91,3.97 0.1,0.33 0.36,0.67 0.51,1.19 0.37,1.26 0.21,5.11 0.22,6.83 -1.76,0.04 -4.75,0.07 -6.43,-0.01l0 -3.17c-1.18,0.14 -1.9,0.27 -3.06,-0.09 -2.44,-0.76 -2.45,-2.82 -4.03,-4.58 -0.31,-0.35 -0.77,-0.43 -0.81,-0.86 0.78,-0.43 1.86,0.15 2.29,0.53 1.2,1.04 1.58,3.65 5.57,2.59 0.23,-1.89 0.36,-1.46 0.75,-2.43 -2.94,-0.35 -5.1,-1.76 -5.94,-4.02 -0.69,-1.86 -0.67,-6.63 1.17,-7.9 -0.09,-0.76 -0.38,-1.1 -0.37,-2.1 0.02,-0.89 0.24,-1.29 0.4,-2.02 0.89,0.1 1.35,0.44 1.89,0.9 0.36,0.31 1.06,0.98 1.26,1.48 0.72,-0.3 0.83,-0.48 1.81,-0.63 1.79,-0.28 4.84,-0.27 6.24,0.61 0.08,-0.06 0.04,-0.02 0.13,-0.12 0.42,-0.45 0.45,-0.7 1.22,-1.35 0.49,-0.41 1.06,-0.8 1.9,-0.89 0.16,0.72 0.38,1.13 0.4,2.02 0.02,0.98 -0.29,1.35 -0.37,2.1 1.85,1.31 1.86,6.14 1.14,7.95zm-8.16 -21.22l-2.57 0c-0.24,0.09 -1.87,0.22 -2.34,0.3 -7.24,1.18 -13.25,6.09 -16.03,12.69 -1.08,2.56 -1.75,5.63 -1.63,8.78 0.13,3.31 0.8,5.78 1.99,8.43 1.36,3.02 3.49,5.53 5.73,7.35 1.46,1.18 2.98,2.19 4.79,2.99 5.5,2.41 11.67,2.5 17.21,0.05 2.14,-0.95 4.59,-2.57 6.24,-4.19 3.08,-3.01 6.13,-8.05 6.38,-14.46 0.13,-3.31 -0.51,-6.07 -1.58,-8.83 -1,-2.57 -2.64,-4.74 -4.07,-6.36 -1.25,-1.42 -3.72,-3.37 -5.95,-4.48 -4.48,-2.23 -7.45,-1.98 -8.18,-2.27z"
                      />
                    </g>
                  </g>
                </svg> */}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nicoboviedo/"
                target="_blank"
              >
                {/* <svg
                  class="social__icons"
                  xmlns="http://www.w3.org/2000/svg"
                  xml:space="preserve"
                  version="1.1"
                  style="
                    shape-rendering: geometricPrecision;
                    text-rendering: geometricPrecision;
                    image-rendering: optimizeQuality;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                  "
                  viewBox="0 0 476.5 476.5"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
                >
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      fill="currentcolor"
                      d="M118.41 184.37l56.87 -0.01 0 171.28 -56.96 -0.16 0.08 -171.11zm109.65 -184.37l23.35 0c30.06,1.48 59.91,8.68 87.67,22.01 51.33,24.64 91.66,64.18 115.7,116.03 15.86,34.2 21.71,63.67 21.71,106.72 0,89.52 -58.47,173.13 -138.04,210.02 -34.1,15.81 -63.79,21.71 -106.72,21.71 -89.2,0 -173.02,-58.24 -210.03,-138.04 -15.86,-34.2 -21.71,-63.67 -21.71,-106.72 0,-61.57 29.48,-122.09 69.57,-162.17 42.56,-42.57 100.01,-66.72 158.49,-69.57zm35.83 208.07c2.91,-5.64 13.78,-16.08 19.54,-19.56 25.74,-15.54 66.84,-9.52 84.9,19.24 12.31,19.61 12.29,41.67 12.29,67.71 0,26.71 0,53.42 0,80.15l-56.95 0c0,-27.03 -0.01,-54.06 0,-81.08 0.01,-25.3 -2.58,-50.15 -30.44,-49.13 -12.5,0.46 -20.37,8.08 -24.76,15.13 -6.12,9.86 -4.73,22.18 -4.73,34.93 0,26.72 0,53.44 0,80.17l-56.86 -0.18 -0.04 -171.1 56.87 -0.02 0.2 23.72zm-125.76 -104.92c44.27,-10.61 55.79,47.64 17.96,56.67 -43.91,10.48 -56.88,-47.33 -17.96,-56.67z"
                    />
                  </g>
                </svg> */}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="sfc3rss7ycjz42fhm6z5xz8gg57qsbzp8nd"></div>
    </footer>
  );
};

export default Footer;
