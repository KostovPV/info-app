import classes from './BlogCard.module.css';


export default function BlogCard() {
    return (
        <section className={classes.blogCard}>
            <div className={classes.blogCardItem}>
                A story about life at sea
            </div>
            <div className={classes.blogCardItem}>
                Author: Will Smith
            </div>
            <div className={classes.blogCardItem}>
                Content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ..."
            </div>
        </section>

    )
}
