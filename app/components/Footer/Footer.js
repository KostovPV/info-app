import Image from 'next/image';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerMain}>
                <ul>
                    <li>
                        <Link href="/jobs">Job list</Link>
                    </li>
                    <li>
                        <Link href="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link href="#">General info</Link>
                    </li>
                    <li>
                        <Link href="#">Socials</Link>
                    </li>
                    <li>
                         <Link href="#">Contacts</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.footerText}>
                Marine info - all the information for marine proffecionals in one place
            </div>
        </div>
    )
}
