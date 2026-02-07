import { Link } from 'react-router-dom'
import styles from './SkillBranch.module.css'

const branches = [
  {
    to: '/quality-assurance',
    icon: '🔍',
    title: 'Quality Assurance',
    sub: 'Playwright, manual testing, API testing',
  },
  {
    to: '/web-designs',
    icon: '🎨',
    title: 'Design',
    sub: 'Web, SMM & Book Design',
  },
  {
    to: '/coded-projects',
    icon: '💻',
    title: 'Dev & Tools',
    sub: 'Frameworks, AI integration, this site',
  },
]

export default function SkillBranch() {
  return (
    <div className={styles.hub}>
      <div className={styles.ghostCenter}>
        <div className={styles.ghostBody}>
          <div className={styles.ghostEyes}>
            <div className={styles.ghostEye} />
            <div className={styles.ghostEye} />
          </div>
          <div className={styles.ghostMouth} />
        </div>
      </div>

      <div className={styles.branches}>
        {branches.map((b) => (
          <Link key={b.to} to={b.to} className={styles.branch}>
            <span className={styles.branchIcon}>{b.icon}</span>
            <div className={styles.branchContent}>
              <span className={styles.branchTitle}>{b.title}</span>
              <span className={styles.branchSub}>{b.sub}</span>
            </div>
            <svg className={styles.branchArrow} width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        ))}
      </div>
    </div>
  )
}
