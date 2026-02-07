import { useNavigate } from 'react-router-dom'
import styles from './Layout.module.css'

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      className={styles.backButton}
      onClick={() => navigate(-1)}
      aria-label="Go back"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M12 4L6 10L12 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back
    </button>
  )
}
