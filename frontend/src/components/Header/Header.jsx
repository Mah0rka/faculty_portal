import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      sticky="top"
      className={styles.navbar} // кастомні стилі для navbar
    >
      <Container>
        {/* Логотип з назвою сайту, клікабельний і веде на головну сторінку */}
        <Navbar.Brand as={Link} to="/" className={styles.brand}>
          <img src="/images/logo.png" alt="Logo" className={styles.logo} />
          <span className={`${styles.siteTitle} fs-6 fs-md-4`}>Факультет інформаційних технологій</span>
        </Navbar.Brand>
        {/* Кнопка для розгортання меню на мобільних пристроях */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Основне меню навігації */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={styles.navLink}>Новини</Nav.Link>
            <Nav.Link as={Link} to="/about" className={styles.navLink}>Про сайт</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className={styles.navLink}>Галерея картинок</Nav.Link>
            <Nav.Link as={Link} to="/contacts" className={styles.navLink}>Контакти</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
