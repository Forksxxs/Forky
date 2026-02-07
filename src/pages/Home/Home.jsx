import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './Home.module.css'
import heroPhoto from '../../assets/photos/shirly-1.png'

const random = (min, max) => Math.floor(min + Math.random() * (max - min))

function generateBlob() {
  const r = []
  for (let i = 0; i < 4; i++) {
    const n = random(30, 70)
    r.push(n)
    r.push(100 - n)
  }
  return `${r[0]}% ${r[1]}% ${r[2]}% ${r[3]}% / ${r[4]}% ${r[6]}% ${r[7]}% ${r[5]}%`
}

export default function Home() {
  const [blobRadius, setBlobRadius] = useState(generateBlob)

  useEffect(() => {
    const interval = setInterval(() => setBlobRadius(generateBlob()), 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.home}>
      <div className={styles.heroSection}>

        {/* Role label */}
        <div className={styles.stickerLabel}>
          <span>Designer</span>
          <span className={styles.stickerDot} />
          <span>QA Engineer</span>
        </div>

        {/* Title — "Shirly" with "PORTFOLIO" overlapping the y */}
        <div className={styles.titleBlock}>
          <h1 className={styles.titleName}>Shirly.</h1>
          <span className={styles.titlePortfolio}>PORTFOLIO</span>
        </div>

        {/* Ghost blob hero */}
        <div className={styles.blobArea}>
          <div className={styles.orbitRing} aria-hidden="true">
            <span className={styles.orbitDot} />
          </div>

          <div
            className={styles.blob}
            style={{ borderRadius: blobRadius }}
            onClick={() => setBlobRadius(generateBlob())}
          >
            <div className={styles.blobInner}>
              <img src={heroPhoto} alt="Shirly Dahan" className={styles.heroPhoto} />
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className={styles.tagline}>
          Design it. Break it. Perfect it.
        </p>

        {/* Explore button */}
        <Link to="/about" className={styles.exploreButton}>
          <span className={styles.explorePulse} />
          EXPLORE
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  )
}
