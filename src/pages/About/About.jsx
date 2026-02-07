import { Link } from 'react-router-dom'
import styles from './About.module.css'
import photo1 from '../../assets/photos/shirly-1.png'
import photo2 from '../../assets/photos/shirly-2.jpg'

export default function About() {
  return (
    <div className={styles.about}>
      <p className={styles.greeting}>Hi, I'm</p>
      <h1 className={styles.name}>Shirly Dahan.</h1>

      <div className={styles.content}>
        <div className={styles.photoGrid}>
          <div className={styles.photo}>
            <img src={photo1} alt="Shirly Dahan" />
          </div>
          <div className={styles.photo}>
            <img src={photo2} alt="Shirly Dahan" />
          </div>
        </div>

        <div className={styles.bio}>
          <p className={styles.bioText}>
            I'm a QA Engineer and Designer from Cagayan de Oro, Philippines.
            I write automated tests using tools like Playwright
            and languages like TypeScript, and I enjoy exploring ways
            AI can help streamline QA workflows.
            I also love designing things that feel good to use.
            Always learning, always curious.
          </p>

          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>
              <span className={styles.bulletIcon}>&#10038;</span>
              <span>Test Automation — Playwright, TypeScript, cross-browser testing</span>
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.bulletIcon}>&#10038;</span>
              <span>Manual &amp; Exploratory Testing — regression, edge cases, accessibility</span>
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.bulletIcon}>&#10038;</span>
              <span>AI Integration — Claude API for test case generation &amp; bug analysis</span>
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.bulletIcon}>&#10038;</span>
              <span>API Testing — Postman, REST APIs, GraphQL</span>
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.bulletIcon}>&#10038;</span>
              <span>Design — Web, SMM, book design, prototyping</span>
            </li>
          </ul>

          {/* Fun facts */}
          <div className={styles.funFacts}>
            <h3 className={styles.funFactsTitle}>Fun facts about me</h3>
            <ul className={styles.funFactsList}>
              <li>I use AI (Claude!) to supercharge my QA workflows</li>
              <li>I've been both a teacher and a tester — two sides of the same coin</li>
              <li>I'm from the City of Golden Friendship</li>
              <li>I love cute ghosts (obviously)</li>
              <li>I obsess over pixels AND edge cases equally</li>
            </ul>
          </div>

          <Link to="/skills" className={styles.nextLink}>
            See what I can do
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
