"use client"
import { CSSProperties } from "react"
import styles from "./aboutus.module.css"
import Link from "next/link"

export default function AboutUs() {
  //@ts-check
  const cssProps = {"--width": "90%"} as CSSProperties
  return (
    <section className={styles.aboutUs}>
        <div className={styles.textWrapper}>
          
            <h1>Welcome to Morrison <br /> <span className="underline">Mindful Meadows - LCSW PLLC</span></h1>

            <p>At Morrison Mindful Meadows - LCSW PLLC, we provide a nurturing environment where individuals and couples can explore their emotions, build resilience, and achieve lasting personal growth. With compassionate care and evidence-based methods, we help you cultivate peace, clarity, and emotional well-being.</p>

            <Link className="main-link" href="/contact">Contact</Link>
        </div>


        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src="/img/aboutus.webp" alt="image of bridge" className={styles.mainImg} />
            
          </div>
        </div>
        <div className={styles.imgStyle}></div>
    </section>
  )
}
