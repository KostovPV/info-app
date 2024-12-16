import NewsCard from '../NewsCard/NewsCard';
import classes from './HotNews.module.css';

export default function HotNews() {
  return (
    <div className={classes.hotNewsContainer}>
      <h2>Latest news</h2>
      <div className={classes.latestNews}>
      <div><NewsCard /></div>
      <div><NewsCard /></div>
      <div><NewsCard /></div>
      </div>
      
    </div>
  )
}
