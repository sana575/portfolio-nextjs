import styles from './AboutMe.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.profileImage}>
          <img src="/my-image.jpg" alt="Profile Picture" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.text}>
            Hi, I'm a passionate developer with a love for creating intuitive and dynamic user experiences.
            With a background in both front-end and back-end development, I bring a balanced approach to crafting solutions.
          </p>
          <p className={styles.text}>
            I specialize in modern web technologies, and I m dedicated to lifelong learning to stay updated with the latest trends and best practices in the industry.
          </p>
          <button className={styles.button}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
