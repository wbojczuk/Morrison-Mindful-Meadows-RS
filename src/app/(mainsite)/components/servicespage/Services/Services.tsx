import ServicesContent from '../ServicesContent/ServicesContent';
import styles from './services.module.css';

export default function Services(){
return (
 <div className={styles.services}>
    
        <h2 className={styles.title}>Things we can help with!</h2>
        <p className={styles.pageDesc}>Explore the different conditions I’ve treated and see if I’m a good fit for you!</p>

        <ServicesContent />
    <img src='/img/services.webp' alt='Image of ' className='bg-img' />
    <div style={{backgroundColor: "rgba(255,255,255,.94)"}} className='shader'></div>
 </div>
)};