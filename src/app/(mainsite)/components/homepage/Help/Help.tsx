import styles from './help.module.css';

export default function Help(){
return (
 <div className={styles.help}>

    <h2>How I Help</h2>

    <div className={styles.itemWrapper}>
        <div className={styles.item}>
            <h3><span className="underline">Indiv</span>idual Therapy</h3>
            <p>We offer a safe, supportive space to work through challenges like anxiety, depression, trauma, and self-esteem issues. Using proven techniques like Cognitive Behavioral Therapy (CBT) and mindfulness practices, we tailor our approach to meet your unique needs.</p>
        </div>
        <div className={styles.item}>
            <h3><span className="underline">Coup</span>les Counseling</h3>
            <p>Strengthen your relationship with tools designed to enhance communication, resolve conflicts, and rebuild emotional connections. We use therapies such as Emotionally Focused Therapy (EFT) and the Gottman Method to guide partners toward deeper understanding and harmony.</p>
        </div>
    </div>
 
    <img src='/img/help.webp' alt='Image of woman' className='bg-img' />
    <div className='shader' style={{backgroundColor: "rgba(255,255,255,.91)"}}></div>
 </div>
)};