"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/13492229/pexels-photo-13492229.jpeg"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storysellers </h1>
          <h2 className={styles.imgDesc}>Make and sell your own story</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vitae nisl dui. Cras egestas tempus enim. Curabitur vel lectus arcu.
            Praesent dapibus ex in congue egestas. Curabitur placerat eros eget
            lacus egestas sagittis. Mauris leo ligula, aliquam a malesuada eget,
            interdum at dui. Duis eu turpis lacinia, aliquam quam in, porttitor
            lectus. Proin luctus porttitor diam, vel tristique urna euismod
            vitae. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Proin commodo sodales nibh,
            faucibus lacinia nisi vehicula at. Nulla interdum lectus arcu, et
            malesuada neque venenatis sed.
            <br />
            <br />
            Praesent vestibulum dui non nunc sagittis, sed iaculis odio
            tincidunt. Curabitur rhoncus nibh ac elit ultricies congue. Nunc
            erat libero, malesuada ac ligula a, egestas laoreet nisl. Cras nec
            orci a tortor euismod pretium. Donec at enim sed leo viverra dictum.
            Etiam scelerisque lacinia enim, sed porta lorem. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Integer id metus massa. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Pellentesque sit amet tortor sed ex aliquam porta
            vitae vitae est. Mauris ac metus vel felis ultrices imperdiet.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vitae nisl dui. Cras egestas tempus enim. Curabitur vel lectus arcu.
            Praesent dapibus ex in congue egestas. Curabitur placerat eros eget
            lacus egestas sagittis. Mauris leo ligula, aliquam a malesuada eget,
            interdum at dui. Duis eu turpis lacinia, aliquam quam in, porttitor
            lectus. Proin luctus porttitor diam, vel tristique urna euismod
            vitae. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Proin commodo sodales nibh,
            faucibus lacinia nisi vehicula at. Nulla interdum lectus arcu, et
            malesuada neque venenatis sed. 
            <br />
            <br />
            Praesent vestibulum dui non nunc
            sagittis, sed iaculis odio tincidunt. Curabitur rhoncus nibh ac elit
            ultricies congue. Nunc erat libero, malesuada ac ligula a, egestas
            laoreet nisl. Cras nec orci a tortor euismod pretium. Donec at enim
            sed leo viverra dictum. Etiam scelerisque lacinia enim, sed porta
            lorem. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Integer id metus massa. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet
            tortor sed ex aliquam porta vitae vitae est. Mauris ac metus vel
            felis ultrices imperdiet.
          </p>
          <Button text="Contact Us" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
