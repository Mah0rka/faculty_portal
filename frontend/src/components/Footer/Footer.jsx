import { Container } from 'react-bootstrap';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className="text-center mb-0">&copy; 2025 Факультет інформаційних технологій</p>
      </Container>
    </footer>
  );
}

export default Footer;