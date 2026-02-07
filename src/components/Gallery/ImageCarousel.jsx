import styles from './ImageCarousel.module.css'

export default function ImageCarousel({ items }) {
  return (
    <div className={styles.carousel}>
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.imageWrapper}>
            {item.image ? (
              <img src={item.image} alt={item.title} />
            ) : (
              <span>book cover</span>
            )}
          </div>
          <div className={styles.caption}>
            <h3 className={styles.captionTitle}>{item.title}</h3>
            <p className={styles.captionDesc}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
