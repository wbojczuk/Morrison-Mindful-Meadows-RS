"use client"
import Link from "next/link"
import styles from "./servicescontent.module.css"

export default function ServicesContent() {
  return (
    <section className={styles.section}>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/offer.webp" width={360} height={600} aria-hidden />
          </div>
          <div className={styles.content}>
              <h2><span className="underline">Services</span> We Offer</h2>

              <p>We specialize in individual therapy and couples counseling, focusing on evidence-based techniques to help you address challenges and create meaningful change. Whether you’re navigating relationship struggles, managing stress, or seeking clarity in your personal life, we’ll work together to find the best path forward.</p>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/what.webp" width={360} height={600} aria-hidden />
          </div>
          <div className={styles.content}>
              <h2><span className="underline">What</span> We Can Help With</h2>

              <p>At Morrison Mindful Meadows, we’re here to support you through life’s challenges, no matter what you’re facing. Whether you’re dealing with anxiety, depression, family conflicts, or challenges like ADHD, we offer a compassionate, judgment-free space to explore what’s holding you back and help you move forward. If you’re struggling with grief, relationship issues, or the stress of a major life change like a breakup or divorce, we’re here to walk alongside you every step of the way.
<br /><br />
For those navigating trauma, PTSD, or work-related stress, our tailored, evidence-based approach will give you the tools to regain balance and build resilience. Whatever your concerns, you’re not alone—and we’re ready to help.</p>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/who.webp" width={360} height={600} aria-hidden />
          </div>
          <div className={styles.content}>
              <h2><span className="underline">Who</span> We Work With</h2>

              <p>We provide therapy for adults and seniors, offering care that’s personalized to meet your unique needs at any stage of life. Whether you’re an individual looking for support or a couple seeking to strengthen your connection, we create a space where healing and growth can flourish.</p>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/conditions.webp" width={360} height={600} aria-hidden />
          </div>
          <div className={styles.content}>
              <h2><span className="underline">Conditions</span> We Don’t Treat</h2>

              <p>While we offer support for a wide range of issues, we don’t currently treat concerns related to drug use or schizophrenia spectrum disorders. If these are areas where you need help, we’re happy to guide you toward other resources that can better meet your needs.</p>
              
              <Link className="main-link" href={"/faq#additionalResources"}>Resources</Link>
          </div>
        </div>
       

    </section>
  )
}
