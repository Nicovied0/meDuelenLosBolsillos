import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer class="footer">
      <div className={styles.divGeneral}>
        <div>
          <p>
            <a href="https://ondev.vercel.app/" target="_blank">
              Desarrollado por ONDev
            </a>
          </p>
        </div>

        <div className={styles.div}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="https://github.com/Nicovied0" target="_blank">
                <Image
                  src="/img/github.png"
                  alt="imgGithub"
                  width={30}
                  height={30}
                  className={styles.img}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nicoboviedo/"
                target="_blank"
              >
                <Image
                  src="/img/linkedin.png"
                  alt="imgLiIn"
                  width={30}
                  height={30}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
