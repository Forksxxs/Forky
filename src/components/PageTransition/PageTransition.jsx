import { useLocation } from 'react-router-dom'
import styles from './PageTransition.module.css'

export default function PageTransition({ children }) {
  const location = useLocation()

  return (
    <div key={location.pathname} className={styles.wrapper}>
      {children}
    </div>
  )
}
