import { Link } from 'react-router-dom'
import styles from './Layout.module.css'

export default function NavIcon() {
  return (
    <Link to="/" className={styles.navIcon} aria-label="Home">
      <svg
        width="36"
        height="42"
        viewBox="0 0 36 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ghost body */}
        <path
          d="M4 22C4 12.059 11.163 4 18 4s14 8.059 14 18v12
             c0 0-3-4-5-1s-3 4-5 1-3-4-5-1-3 4-5 1-3-4-5-1-3 4-3 1V22Z"
          fill="var(--color-ghost)"
          stroke="var(--color-border)"
          strokeWidth="2"
        />
        {/* Eyes */}
        <circle cx="13" cy="20" r="2.5" fill="var(--color-ghost-eyes)" />
        <circle cx="23" cy="20" r="2.5" fill="var(--color-ghost-eyes)" />
        {/* Mouth */}
        <path d="M15 26 Q18 29 21 26" stroke="var(--color-ghost-eyes)" strokeWidth="1.5" fill="none" opacity="0.4" />
      </svg>
    </Link>
  )
}
