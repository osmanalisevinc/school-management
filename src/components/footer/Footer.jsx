import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2025 Mamamia. All rights reserved.</div>
      <div>
        <div className={styles.social}>
          <Image  className={styles.icon} src="/face.png" alt="Lama dev"   width={15} height={15} />
          <Image  className={styles.icon} src="/insta.jpg" alt="Lama dev"   width={15} height={15} />
          <Image  className={styles.icon} src="/twitter.png" alt="Lama dev"  width={15} height={15} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
