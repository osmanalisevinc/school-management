import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const BlogPage = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
       className={styles.image}
        src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg"
        alt=""
        width={400}
        height={250}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Paragraph</p>
      </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
       className={styles.image}
        src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg"
        alt=""
        width={400}
        height={250}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Paragraph</p>
      </div>
      </Link>
    </div>
  )
}

export default BlogPage