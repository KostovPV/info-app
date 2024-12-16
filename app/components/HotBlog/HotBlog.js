import BlogCard from "../BlogCard/BlogCard";
import classes from "./HotBlog.module.css";


export default function HotBlog() {
  return (
    <div className={classes.hotBlogsContainer} >
      <h2>Latest blogs</h2>
      <div className={classes.hotBlogsList}>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      </div>
    </div>
  )
}
