import HotBlog from "../HotBlog/HotBlog";
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
        <HotBlog />
      </div>

    </section>
  );
}
