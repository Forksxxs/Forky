import ProjectCard from '../../components/Cards/ProjectCard'
import UnderConstruction from '../../components/UnderConstruction/UnderConstruction'
import { qaProjects } from '../../data/projects'
import styles from './QualityAssurance.module.css'

export default function QualityAssurance() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Quality Assurance</h1>
        <p className={styles.subtitle}>QA case studies — testing strategies, bug tracking, and documentation.</p>
      </div>

      {qaProjects.length === 0 ? (
        <UnderConstruction />
      ) : (
        <div className={styles.grid}>
          {qaProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </div>
  )
}
