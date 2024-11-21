import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Slider from "./components/Slider/Slider";

export default function Home() {
  return (<>
    <div className={styles.pageTop}>
      <h1 >All information for Marine proffecionals in one place</h1>
      <section className={styles.main}>
        <div className={styles.jobContainer}>
          <div>Find the dreamed job at sea</div>
          <button>
            <Link href="/jobs">Browse jobs</Link>
          </button>
        </div>
      </section>
    </div>
    <Slider />
  </>

  );
}
