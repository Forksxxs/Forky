import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ title, description, image, link, internalLink }) {
  const content = (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <span>project thumbnail</span>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.cta}>
          See &gt;
        </span>
      </div>
    </div>
  )

  if (internalLink) {
    return (
      <Link to={internalLink} style={{ textDecoration: 'none' }}>
        {content}
      </Link>
    )
  }

  if (link && link !== '#') {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {content}
      </a>
    )
  }

  return content
}
