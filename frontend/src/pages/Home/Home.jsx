import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getNews } from '../../services/apiService';
import Slider from '../../components/Slider/Slider';
import styles from './Home.module.scss';

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews()
      .then((response) => setNews(response.data))  // Отримуємо новини з API
      .catch((error) => console.error('Помилка при отриманні новин:', error));
  }, []);

  return (
    <Container className={styles.container}>
      <Slider /> {/* Карусель із слайдами */}
      <h2 className={styles.title}>Головні новини</h2>
      <Row>
        {news.map((item) => (
          <Col md={4} key={item.id} className="mb-4">
            <Card className={styles.card}>
              <Card.Img
                variant="top"
                src={item.image_url}  // Картинка новини
                className={styles.cardImg}
              />
              <Card.Body>
                <Card.Title className={styles.cardTitle}>{item.title}</Card.Title> {/* Заголовок */}
                <Card.Text>{item.description}</Card.Text> {/* Опис новини */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
