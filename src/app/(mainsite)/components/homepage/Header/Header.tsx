"use client"
import styles from "./header.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>
        <h1>Find Clarity</h1>

          <p>Empowering Change, Restoring Balance</p>

          
        

        <Link href="/contact" className="main-link">Contact</Link>

        <h5>Licensed in New York, Kentucky, Connecticut, and the Commonwealth of Virginia!</h5>

        <img src="/img/header-bg.webp" alt="" className="bg-img" />
        <div className="shader"></div>

    </header>
  )
}
