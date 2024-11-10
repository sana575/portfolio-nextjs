
//   // import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Icons for social media

// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// const Footer = () => {
//     return (
//       <footer className=" bg-black bg-opacity-35 text-white py-8 mt-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <p className="text-sm mb-4">&copy; 2024 sana. All Rights Reserved.</p>
//           <div className="flex justify-center space-x-6">
//             <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//               <FaGithub size={24} />
//             </a>
//             <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//               <FaLinkedin size={24} />
//             </a>
//             <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//               <FaTwitter size={24} />
//             </a>
//           </div>
//         </div>
//       </footer>
//     );
//   }
  
//   export default Footer;
  
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="max-w-7xl mx-auto">
        <p className={styles.footerText}>&copy; 2024 Sana. All Rights Reserved.</p>
        <div className={styles.iconContainer}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
