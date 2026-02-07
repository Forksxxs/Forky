import styles from './ItsAWrap.module.css'

export default function ItsAWrap() {
  return (
    <div className={styles.page}>
      {/* Ghost illustration */}
      <div className={styles.ghost}>
        <div className={styles.ghostBody}>
          <div className={styles.ghostEyes}>
            <div className={styles.ghostEye} />
            <div className={styles.ghostEye} />
          </div>
          <div className={styles.ghostSmile} />
        </div>
      </div>

      <h1 className={styles.title}>It's a Wrap!</h1>
      <p className={styles.subtitle}>Thanks for visiting my haunted portfolio. Let's connect!</p>

      <div className={styles.contactList}>
        <a
          href="mailto:shirlydahan83@gmail.com"
          className={styles.contactItem}
        >
          <span className={styles.contactIcon}>&#9993;</span>
          <span className={styles.contactLabel}>shirlydahan83@gmail.com</span>
        </a>

        <a
          href="tel:+639276611330"
          className={styles.contactItem}
        >
          <span className={styles.contactIcon}>&#9742;</span>
          <span className={styles.contactLabel}>0927-661-1330</span>
        </a>

        <a
          href="https://linkedin.com/in/shirly-dahan"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
        >
          <span className={styles.contactIcon}>&#128279;</span>
          <span className={styles.contactLabel}>LinkedIn</span>
        </a>

        <a
          href="https://github.com/Forksxxs"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
        >
          <span className={styles.contactIcon}>&#128187;</span>
          <span className={styles.contactLabel}>GitHub</span>
        </a>
      </div>

      <p className={styles.location}>Cagayan de Oro, Philippines</p>

      <p className={styles.footer}>Made with care (and ghosts) by Shirly Dahan</p>
    </div>
  )
}
