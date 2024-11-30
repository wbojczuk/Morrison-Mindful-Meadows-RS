"use client"
import { CSSProperties } from "react"
import styles from "./aboutcontent.module.css"
import Link from "next/link"

export default function AboutContent() {
  //@ts-check
  const cssProps = {"--width": "90%"} as CSSProperties
  return (
    <section className={styles.aboutUs}>
        <div className={styles.textWrapper}>
          <h4>About Me</h4>
            <h1>About Dr. Marcia <span className="underline">Morrison</span></h1>

            <p> Hi, I’m Dr. Marcia Morrison, a licensed psychotherapist in both New York and Kentucky, with over 30 years of experience helping individuals and couples navigate life’s challenges. I hold dual doctoral degrees—a Ph.D. in Social Work and a DSW in Social Welfare—and have worked in diverse settings, including private practice, academia, and military counseling. My career has taken me across the U.S., Alaska, Germany, and Japan, where I’ve had the privilege of providing mental health services to active-duty military members and their families.
<br /><br />
In addition to my work with the military community, I’ve directed programs for NYC’s Administration for Children’s Services, addressing child abuse, neglect, and adolescent care. I also bring over 25 years of teaching experience as an Adjunct Assistant Professor at the City University of New York. Whether helping couples improve communication or guiding individuals through anxiety, depression, or trauma, my approach is compassionate and research-informed. I’m here to create a safe, supportive space where you feel heard, valued, and empowered to achieve lasting positive change.</p>

            <Link className="main-link" href="/contact">Contact</Link>
        </div>


        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src="/img/aboutcontent.webp" alt="image of dr marcia" className={styles.mainImg} />
            <span>Licensed in New York, and Kentucky</span>
            <div className={styles.imgStyle}></div>
          </div>
        </div>
    </section>
  )
}
