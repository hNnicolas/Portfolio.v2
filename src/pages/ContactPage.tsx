import Footer from '../components/Footer';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importation des icônes
import '../scss/ContactPage.scss';

const ContactPage: React.FC = () => {
  return (
    <>
      <div className='contact-page-text'>
        <h2 className='contact-page-title'>
          CONTACT
        </h2>
        <div className='typing-container'>
          <p className='contact-page-subtitle'>
            Reach out :)
          </p>
        </div>
      </div>
      <div className='contact-content'>
        <div className='contact-details-container'>
          <div className='contact-details'>
            <span className='contact-title'>EMAIL </span>
            <a href="mailto:huang.nicola@gmail.com" className='contact-address'>
              huang.nicola@gmail.com
            </a>
          </div>
          <div className='contact-details'>
            <a 
              href="https://www.linkedin.com/in/huang-nicolas/" 
              className='contact-address' 
              target="_blank" 
              rel="noopener noreferrer"
            >
               Connect with me on LinkedIn <FaLinkedin style={{ color: '#0077b5', fontSize: '1.5rem', marginRight: '0.5rem' }} />
            </a>
          </div>
          <div className='contact-details'>
            <a 
              href="https://github.com/hNnicolas" 
              className='contact-address' 
              target="_blank" 
              rel="noopener noreferrer"
            >
               Visit GitHub <FaGithub style={{ color: '#fff', fontSize: '1.5rem', marginRight: '0.5rem' }} />

            </a>
          </div>
        </div>
        <div className='internship-details'>
          <h3>INTERNSHIP</h3>
          <p>
            My primary goal is to find an environment where I can 
            <span className='bolder'> enhance my skills</span> as a developer and 
            <span className='bolder'> make meaningful contributions</span>. 
            I am dedicated to <span className='bolder'>learning</span> and 
            <span className='bolder'>growing</span> throughout.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
