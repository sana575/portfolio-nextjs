import styles from './Projects.module.css';

export default function Projects() {
  return (
    
    <section className={styles.projects} id="projects">
     
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>

        <div className={styles.projectCard}>
      
          <h3> personal portfolio</h3>
        
          <p>Responsive website built with Next.js.</p>
        </div>
        <div className={styles.projectCard}>
          <h3>UI,UX Figma Design</h3>
          <p>Interactive design with animations.</p>
        </div>
        {/* More project cards as needed */}
        <div className={styles.projectCard}>
          <h3>My website</h3>
          <p>Interactive design with animations.</p>
        </div>
        <div className={styles.projectCard}>
          <h3>E-cmmarce website</h3>
          <p>Interactive design with animations.</p>
        </div>
      </div>
    </section>
  );
}




