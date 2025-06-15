import { Container } from 'react-bootstrap';
import styles from './Contacts.module.scss';

function Contacts() {
  return (
    <Container className={`${styles.container} px-0 px-sm-3`}>
      <div className={styles.mapWrapper}>
        <iframe
          title="Google Map Полтавська політехніка"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1293.5675910122382!2d34.56606839843299!3d49.57633894515087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82f64cd0cbd85%3A0x528a08266c1d4938!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIgwqvQn9C-0LvRgtCw0LLRgdGM0LrQsCDQv9C-0LvRltGC0LXRhdC90ZbQutCwINGW0LzQtdC90ZYg0K7RgNGW0Y8g0JrQvtC90LTRgNCw0YLRjtC60LDCuw!5e0!3m2!1suk!2sua!4v1749989501485!5m2!1suk!2sua"
          className={styles.mapIframe}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <h2 className={`${styles.title} fs-3 fs-md-2`}>Контакти</h2>
      <p className={`${styles.contactText} fs-5 fs-md-4`}>Email: it.faculty@ukrnet.com</p>
      <p className={`${styles.contactText} fs-5 fs-md-4`}>Телефон: +380 998 722 221</p>
      <p className={`${styles.contactText} fs-5 fs-md-4`}>Адреса: +380 998 722 221</p>
    </Container>
  );
}

export default Contacts;