import classes from './NewsCard.module.css';

export default function NewsCard() {
  return (
    <section className={classes.NewsCard}>
    <div className={classes.NewsCardData}>Story: General thoughts</div>
    <div className={classes.NewsCardData}>Headline: What mekes me a good seaman</div>
    <div className={classes.NewsCardData}>Content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ..."</div>
    <div className={classes.NewsCardData}>Author: Marchelo Bioso</div>
    </section>   
  )
}
