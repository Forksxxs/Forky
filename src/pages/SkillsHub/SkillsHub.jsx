import { Link } from 'react-router-dom'
import SkillBranch from '../../components/SkillBranch/SkillBranch'
import styles from './SkillsHub.module.css'

const tools = [
  'Playwright', 'TypeScript', 'Postman', 'BrowserStack',
  'LambdaTest', 'Chrome DevTools', 'Linear', 'ClickUp',
  'GitHub', 'Jira', 'Claude API', 'GraphQL', 'SQL',
]

export default function SkillsHub() {
  return (
    <div className={styles.skillsHub}>
      <h1 className={styles.title}>
        My <span className={styles.highlight}>Multo(ghost)</span>
      </h1>
      <p className={styles.subtitle}>
        QA precision meets design intuition — here's what I bring to the table.
      </p>

      <SkillBranch />

      <div className={styles.designSub}>
        <span className={styles.designLabel}>Under Design:</span>
        <div className={styles.designLinks}>
          <Link to="/web-designs" className={styles.designLink}>Web Designs</Link>
          <Link to="/smm-design" className={styles.designLink}>SMM Design</Link>
          <Link to="/book-design" className={styles.designLink}>Book Design</Link>
        </div>
      </div>

      {/* Tools & technologies */}
      <div className={styles.toolsSection}>
        <span className={styles.designLabel}>Tools I use:</span>
        <div className={styles.toolsGrid}>
          {tools.map((t) => (
            <span key={t} className={styles.toolTag}>{t}</span>
          ))}
        </div>
      </div>

      <Link to="/its-a-wrap" className={styles.wrapLink}>
        Let's connect
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  )
}
