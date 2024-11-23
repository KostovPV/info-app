import HotJobs from "../HotJobs/HotJobs";
import HotNews from "../HotNews/HotNews";
import classes from "./Slider.module.css";

export default function Slider() {
  return (
    <section className={classes.sliderContainer}>
      <div className={classes.slide}>
        <HotJobs />
      </div>
      <div className={classes.slide}>
        <HotNews />
      </div>
      <div className={classes.slide}>
        <h3>Latest Blogs</h3>
        <p>Read inspiring stories and tips from industry experts.</p>
      </div>

    </section>
  );
}
