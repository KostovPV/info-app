import JobCard from '../JobCard/JobCard';
import classes from './HotJobs.module.css';


export default function HotJobs() {
  return (
    <div className={classes.HotobsContainer}>
      <h2>Hot Jobs</h2>
      <div className={classes.jobsSection}>
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>

  )
}
