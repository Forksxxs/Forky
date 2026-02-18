import styles from './UnderConstruction.module.css'

export default function UnderConstruction() {
  return (
    <div className={styles.wrap}>
      {/* Ghost with hard hat */}
      <div className={styles.ghost}>
        <div className={styles.hardHat}>
          <div className={styles.hatBrim} />
        </div>
        <div className={styles.body}>
          <div className={styles.eyes}>
            <span className={styles.eye} />
            <span className={styles.eye} />
          </div>
        </div>
        <svg className={styles.tail} viewBox="0 0 60 16" preserveAspectRatio="none">
          <path d="M0 0 Q10 16 20 0 Q30 16 40 0 Q50 16 60 0 L60 16 L0 16 Z" fill="var(--color-border)" />
        </svg>
      </div>

      <p className={styles.title}>Under Construction</p>
      <p className={styles.tagline}>Boo-ilding in progress...</p>
    </div>
  )
}
