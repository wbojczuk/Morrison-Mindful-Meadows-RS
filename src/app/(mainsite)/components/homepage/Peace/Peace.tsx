import styles from './peace.module.css';

export default function Peace(){
return (
<div className={styles.peace}>
    <img src="/img/logo.png" className={styles.img} alt="logo" />
    <h2>Find Your Peace</h2>

    <img src='/img/peace.gif' alt='Image of nature' className='bg-img' />
    <div className="shader" style={{backgroundColor: "rgba(255,255,255,.24)"}}></div>
</div>
)};