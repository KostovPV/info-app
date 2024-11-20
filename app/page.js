import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (<>
    <div className={styles.page}>
      <h1 >All information for Marine proffecionals in one place</h1>
      <main className={styles.main}>
        <div className={styles.jobContainer}>
          <div>Find the dreamed job at sea</div>
          <button>
            <Link href='/jobs'>Browse jobs</Link>
          </button>
          
        </div>
      </main>

    </div>
  </>

  );
}
