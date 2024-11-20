import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerMain}>
                <ul>
                    <li>Job list</li>
                    <li>Blogs</li>
                    <li>General info</li>
                    <li>Socials</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div className={styles.footerText}>
                Marine info - all the information for marine proffecionals in one place
            </div>
        </div>
    )
}
