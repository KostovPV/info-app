import HotJobs from '../HotJobs/HotJobs';
import classes from './Slider.module.css';

export default function Slider() {
  return (
    <section className={classes.sliderContainer}>
        <div>
            <HotJobs />
        </div>
        <div>
            Latest news
        </div>
        <div>
            Latest blogs
        </div>
    </section>
  )
}
