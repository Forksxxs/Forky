import ProjectCard from '../../components/Cards/ProjectCard'
import { codedProjects } from '../../data/projects'
import styles from './CodedProjects.module.css'

export default function CodedProjects() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Coded Projects</h1>
        <p className={styles.subtitle}>Development case studies — apps and tools I've built.</p>
      </div>

      <div className={styles.grid}>
        {codedProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}
