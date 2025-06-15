import { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import styles from './Slider.module.scss';
import { getEvents } from '../../services/apiService';

function Slider() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Завантажуємо дані слайдів з API при монтуванні компонента
    getEvents()
      .then((response) => setSlides(response.data))
      .catch((error) => console.error('Помилка при отриманні слайдів:', error));
  }, []);

  return (
    <Container className="px-0 px-sm-3">
      {/* Карусель для відображення слайдів */}
      <Carousel className={`${styles.carousel} w-100 mw-100 shadow-lg rounded`}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            {/* Зображення слайду з обробкою помилки завантаження */}
            <img
              className={`${styles.image_url} d-block img-fluid`}
              src={slide.image_url}
              alt={slide.title || 'Слайд'}
            />
            {/* Підпис до слайду з напівпрозорим фоном */}
            <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3 text-sm-start text-md-center">
              <h3 className="fs-6 fs-md-3">{slide.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Slider;
