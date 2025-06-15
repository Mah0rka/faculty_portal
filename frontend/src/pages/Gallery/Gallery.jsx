import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getGallery } from '../../services/apiService';
import styles from './Gallery.module.scss';

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Завантажуємо зображення галереї при монтуванні компонента
    getGallery()
      .then((response) => setImages(response.data))
      .catch((error) => console.error('Помилка при отриманні галереї:', error));
  }, []);

  return (
    <Container className={styles.container}>
      <h2 className={styles.title}>Галерея</h2>
      <Row>
        {images.map((image) => (
          <Col md={4} key={image.id} className="mb-4">
            <Card className={styles.card}>
              <Card.Img
                variant="top"
                src={image.image_url}
                className={styles.cardImg}
                alt={image.description || 'Зображення'}
              />
              <Card.Body>
                {/* Опис зображення або текст */}
                <Card.Text>{image.description || 'Без опису'}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
