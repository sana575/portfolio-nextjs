

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
      <Image src="/my-image.jpg" alt="Sana's Image" width={200} height={250} className={styles.image} />
        <h1>Hello, I'm Sana Ansari</h1>
        <p>Creative Web Developer | Designer</p>
        
        <Link href="#projects" passHref>
          <button className={styles.heroButton}>View my work</button>
        </Link>
      </div>
    </section>
  );
}
