import styles from './resources.module.css';

export default function Resources(){
return (
 <div className={styles.resources}>
<h2 id="additionalResources">Additional Resources</h2>
<p>These links will direct you to the respective websites where you can find more information on mental health support, resources, and services.</p>

    <h3>Associations & Institutes</h3>

    <div className={styles.item}>
        <h4 className={styles.title}>American Academy of Child & Adolescent Psychiatry</h4>
        <a href="https://www.aacap.org" target='_blank'>https://www.aacap.org</a>
         </div>

         <div className={styles.item}>
        <h4 className={styles.title}>American Association for Marriage and Family Therapy</h4>
        <a href="https://www.aamft.org" target='_blank'>https://www.aamft.org</a>
    </div>

    <div className={styles.item}>
        <h4 className={styles.title}>National Women’s Health Resource Center</h4>
        <a href="https://www.womenshealth.gov" target='_blank'>https://www.womenshealth.gov</a>
    </div>

    <div className={styles.item}>
        <h4 className={styles.title}>The National Child Traumatic Stress Network</h4>
        <a href="https://www.nctsn.org" target='_blank'>https://www.nctsn.org</a>
    </div>

    <div className={styles.item}>
        <h4 className={styles.title}>NAMI (National Alliance on Mental Illness)</h4>
        <a href="https://www.nami.org" target='_blank'>https://www.nami.org</a>
    </div>

    <div className={styles.item}>
        <h4 className={styles.title}>Substance Abuse and Mental Health Services Administration (SAMHSA)</h4>
        <a href="https://www.samhsa.gov" target='_blank'>https://www.samhsa.gov</a>
    </div>

    <h3>Suicide Awareness and Hotlines</h3>

    <div className={styles.item}>
        <h4 className={styles.title}>American Foundation for Suicide Prevention</h4>
        <a href="https://afsp.org" target='_blank'>https://afsp.org</a>
    </div>

    <div className={styles.item}>
        <h4 className={styles.title}>Suicide Awareness Voices of Education (SAVE)</h4>
        <a href="https://www.save.org" target='_blank'>https://www.save.org</a>
    </div>

    <h3>Depression</h3>

    <div className={styles.item}>
        <h4 className={styles.title}>Depression and How Therapy Can Help</h4>
        <a href="https://www.psychologytoday.com/us/basics/depression" target='_blank'>https://www.psychologytoday.com/us/basics/depression</a>
    </div>

    <div className={styles.item}>
        <h4 className={styles.title}>Depression Screening</h4>
        <a href="https://www.psychologytoday.com/us/tests/mental-health/depression-test" target='_blank'>https://www.psychologytoday.com/us/tests/mental-health/depression-test</a>
    </div>

    <div className={styles.item}>
        <h4 className={styles.title}>Depression and Bipolar Support Alliance (DBSA)</h4>
        <a href="https://www.dbsalliance.org" target='_blank'>https://www.dbsalliance.org</a>
    </div>

    <h3>Anxiety Disorders</h3>

    <div className={styles.item}>
        <h4 className={styles.title}>Answers to Your Questions About Panic Disorder</h4>
        <a href="https://adaa.org/understanding-anxiety/panic-disorder" target='_blank'>https://adaa.org/understanding-anxiety/panic-disorder</a>
    </div>

    <h3>Obsessive-Compulsive Disorder (OCD)</h3>

    <div className={styles.item}>
        <h4 className={styles.title}>Beyond OCD</h4>
        <a href="https://beyondocd.org" target='_blank'>https://beyondocd.org</a>
    </div>

    <div className={styles.item}>
        <h4 className={styles.title}>International OCD Foundation</h4>
        <a href="https://iocdf.org" target='_blank'>https://iocdf.org</a>
    </div>

    <div className={styles.item}>
        <h4 className={styles.title}>Trichotillomania Learning Center</h4>
        <a href="https://www.trich.org" target='_blank'>https://www.trich.org</a>
    </div>

    <h3>Post-traumatic Stress Disorder (PTSD)</h3>

    <div className={styles.item}>
        <h4 className={styles.title}>National Center for PTSD</h4>
        <a href="https://www.ptsd.va.gov" target='_blank'>https://www.ptsd.va.gov</a>
    </div>

    <h3>Attention-Deficit Hyperactivity Disorder (ADHD):</h3>

    <div className={styles.item}>
        <h4 className={styles.title}>ADDA – Attention Deficit Disorder Association</h4>
        <a href="https://add.org" target='_blank'>https://add.org</a>
    </div>


    <h3>Child Abuse and Domestic Violence:</h3>

    <div className={styles.item}>
        <h4 className={styles.title}>The National Domestic Violence Hotline</h4>
        <a href="https://www.thehotline.org" target='_blank'>https://www.thehotline.org</a>
    </div>


    <h3>Medication</h3>

    <div className={styles.item}>
        <h4 className={styles.title}>DrugWatch.com</h4>
        <a href="https://www.drugwatch.com" target='_blank'>https://www.drugwatch.com</a>
    </div>


    <h3>Addiction and Recovery</h3>

    <div className={styles.item}>
        <h4 className={styles.title}>Alcoholics Anonymous</h4>
        <a href="https://www.aa.org" target='_blank'>https://www.aa.org</a>
    </div>

    <div className={styles.item}>
        <h4 className={styles.title}>Center for Online Addiction</h4>
        <a href="" target='_blank'>https://www.onlineaddiction.com</a>
    </div>


    <div style={{backgroundColor: "rgba(255,255,255,.9)"}} className="shader"></div>
    <img src="/img/resources.webp" alt="resources" className="bg-img" />
 </div>
)};