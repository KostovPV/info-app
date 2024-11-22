import classes from './JobCard.module.css';

export default function JobCard() {
    return (
        <div className={classes.jobCard} >
            <div className={classes.jobCardItem}>
                Image: 
            </div>
            <div className={classes.jobCardItem}>
                Position: Chief Engineer
            </div>
            <div className={classes.jobCardItem}>
                Vessel type: Container
            </div>
            <div className={classes.jobCardItem}>
                Duration: 3 months on / 3 months off
            </div>
            <div className={classes.jobCardItem}>
                Company: Stena Line
            </div>
            <div className={classes.jobCardItem}>
                Salary: 8000Euro
            </div>
        </div>
    )
}
