import ImageCarousel from '../../components/Gallery/ImageCarousel'
import { bookDesignProjects } from '../../data/projects'
import styles from './BookDesign.module.css'

export default function BookDesign() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Book Design</h1>
        <p className={styles.subtitle}>Book covers, layouts, and editorial design.</p>
      </div>

      <ImageCarousel items={bookDesignProjects} />

      <p className={styles.hint}>
        <span>&larr;</span> Scroll to explore <span>&rarr;</span>
      </p>
    </div>
  )
}
