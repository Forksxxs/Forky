import UnderConstruction from '../../components/UnderConstruction/UnderConstruction'
import { smmProjects } from '../../data/projects'
import styles from './SMMDesign.module.css'

export default function SMMDesign() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>SMM Design</h1>
        <p className={styles.subtitle}>Social media posters, banners, and campaign visuals.</p>
      </div>

      {smmProjects.length === 0 ? (
        <UnderConstruction />
      ) : (
        <div className={styles.gallery}>
          {smmProjects.map((project) => (
            <div key={project.id} className={styles.posterCard}>
              <div className={styles.posterImage}>
                poster preview
              </div>
              <div className={styles.posterInfo}>
                <h3 className={styles.posterTitle}>{project.title}</h3>
                <p className={styles.posterDesc}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
