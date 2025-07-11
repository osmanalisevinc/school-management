import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3783229/pexels-photo-3783229.jpeg"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input}/>
          <input type="text" placeholder="email" className={styles.input}/>
          <textarea cols="30" rows="10" placeholder="message" className={styles.textarea}/>
          <Button url="#" text="send"/>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
