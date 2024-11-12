

import Link from "next/link"

import classes from './Main-navigation.module.css'
// import Logo from "./logo"

function MainNavigation() {
    return (
        <header className={classes.header}>
            <ul>
                <li><Link href="/">Logo</Link></li>
                <li><Link href="/jos">Find Job</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/blogs">Blogs</Link></li>
            </ul>

        </header>
    )
}

export default MainNavigation