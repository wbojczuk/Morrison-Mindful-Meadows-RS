"use client"
import { CSSProperties } from "react"
import styles from "./meet.module.css"
import Link from "next/link"

export default function Meet() {
  //@ts-check
  const cssProps = {"--width": "90%"} as CSSProperties
  return (
    <section className={styles.aboutUs}>
        <div className={styles.textWrapper}>
          <h4>About Me</h4>
            <h1>Meet Dr. Marcia <span className="underline">Morrison</span></h1>

            <p>My goal is to help individuals and couples reach their personal and relationship goals, creating lasting positive change. Outside of my practice, I’m dedicated to continuing my education and staying up-to-date with the latest research in counseling. I work hard to provide a warm, welcoming, and non-judgmental space where you feel heard, valued, and supported. I’m excited to be a part of your journey toward better emotional well-being and more fulfilling relationships.</p>

            <Link className="main-link" href="/contact">Read More</Link>
        </div>


        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src="/img/marcia.png" alt="image of dr marcia" className={styles.mainImg} />
            <div className={styles.imgStyle}></div>
          </div>
        </div>
    </section>
  )
}
