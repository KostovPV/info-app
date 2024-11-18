import Image from "next/image";
import Link from "next/link";
import classes from './Header.module.css';


export default function Header() {
    return <>
        <section className={classes.navigation}>
            <ul className={classes.list}>
                <li>
                    <Link href="/">
                        {/* <Image  alt="A plate with food on it" priority /> */}
                        Marine info
                    </Link>
                </li>
                <li>
                    <Link href="/jobs">Browse all jobs</Link>
                </li>
                <li>
                    <Link href="/blogs">Browse all blogs</Link>
                </li>
            </ul>

        </section>

    </>
}