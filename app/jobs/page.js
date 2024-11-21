
import classes from './page.module.css';

export default function JobsPage() {
  return (
    <section className={classes.jobsContainer}>
      <h2>Browse all gobs to find your perfect place</h2>
      <div className={classes.jobsWrapper}>
        <div className={classes.asside}>
          Filter criteria here
        </div>
        <div className={classes.jobList}>
          All jobs here
        </div>

      </div>
    </section>
  );
}