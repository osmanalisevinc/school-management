import Image from "next/image";
import styles from "./page.module.css";
import schoolImage from "../../public/school.jpg";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>Turning your idea into reality</p>
        <button className={styles.button}></button>
        <Button text="See our works" url="/portfolio" />
      </div>
      <div className={styles.item}>
        <Image src={schoolImage} alt="" className={styles.image} />
      </div>
    </div>
  );
}
