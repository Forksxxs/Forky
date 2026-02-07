import { useLocation } from 'react-router-dom'
import NavIcon from './NavIcon'
import BackButton from './BackButton'
import FloatingGhosts from '../FloatingGhosts/FloatingGhosts'
import PageTransition from '../PageTransition/PageTransition'
import styles from './Layout.module.css'

const GHOST_VARIANTS = {
  '/': 'home',
  '/about': 'about',
  '/skills': 'skills',
  '/web-designs': 'gallery',
  '/smm-design': 'gallery',
  '/book-design': 'gallery',
  '/coded-projects': 'skills',
  '/quality-assurance': 'skills',
  '/its-a-wrap': 'contact',
}

export default function Layout({ children }) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const ghostVariant = GHOST_VARIANTS[location.pathname] || 'default'

  return (
    <div className={styles.layout}>
      <FloatingGhosts variant={ghostVariant} />
      <header className={styles.header}>
        {!isHome && <NavIcon />}
        <div style={{ flex: 1 }} />
        {!isHome && <BackButton />}
      </header>
      <main className={styles.main}>
        <PageTransition>{children}</PageTransition>
      </main>
    </div>
  )
}
