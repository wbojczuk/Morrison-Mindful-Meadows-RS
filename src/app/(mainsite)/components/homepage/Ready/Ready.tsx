"use client"

import Link from 'next/link';
import styles from './ready.module.css';

export default function Ready(){
return (
 <div className={styles.find}>

    <h2>Ready to take the first step toward a healthier, more balanced life?</h2>


    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`/services`}>All Services</Link>
    <Link className='main-link' href={`/contact`}>Contact</Link>
    </div>
 
    <img src='/img/ready.webp' alt='Image of nature' className='bg-img' />
    <div style={{backgroundColor: "rgba(255,255,255,0.9)"}} className='shader'></div>
 </div>
)};