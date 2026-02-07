import ProjectCard from '../../components/Cards/ProjectCard'
import { webDesignProjects } from '../../data/projects'
import styles from './WebDesigns.module.css'

export default function WebDesigns() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Web Designs</h1>
        <p className={styles.subtitle}>Website design projects — layouts, UI, and visual concepts.</p>
      </div>

      <div className={styles.grid}>
        {webDesignProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}
