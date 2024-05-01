import PostCard from "@/components/postCard/PostCard"
import styles from "./blog.module.css"

const Blog = () => {
  return (
    <div className={styles.container}>
    {posts.map((post) => (
      <div className={styles.post} key={post.id}>
        <PostCard post={post} />
      </div>
    ))}
  </div>

  )
}

export default Blog