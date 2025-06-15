const express = require('express');
const cors = require('cors');
const helmet = require('helmet'); // Helmet імпортується, але не використовується в middleware (можна додати)
const sequelize = require('./config/database');
const newsRoutes = require('./routes/newsRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const eventsRoutes = require('./routes/eventsRoutes');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Статичне розміщення папки uploads для доступу до зображень

// Routes
app.use('/api/news', newsRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/events', eventsRoutes);

// Error handling middleware 
app.use(errorHandler);

// Database initialization
sequelize.sync({ force: true }).then(async () => {
  const News = require('./models/News');
  const Gallery = require('./models/Gallery');
  const Event = require('./models/Events');
  // Seed initial data

  await News.bulkCreate([
    {
      title: "Розпочато набір на курси з кібербезпеки",
      description: "Факультет ІТ відкрив реєстрацію на безкоштовні курси з основ кібербезпеки для студентів 2-4 курсів.",
      image_url: 'https://osvita.loda.gov.ua/img/blog/pages-cover/1685102282.jpeg',
    },
    {
      title: "Успішний виступ команди на олімпіаді з програмування",
      description: "Команда ФІТ посіла 2 місце в регіональному етапі Міжнародної студентської олімпіади з програмування.",
      image_url: 'https://mon.gov.ua/static-objects/mon/resources/resize/820_360_0_0_auto/img_a074ad5ac10833aff73340f9a1a72c9b.jpg',
    },
    {
      title: "Відбулася зустріч з роботодавцями",
      description: "Представники ІТ-компаній розповіли студентам про вимоги до молодих фахівців та можливості стажування.",
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTAGQeT8NaniyMNFvUx8HezL4RrukaTfB9Q&s',
    },
    {
      title: "Успішне завершення проектної практики",
      description: "Більше 60 студентів захистили свої проєкти, серед яких були мобільні додатки, веб-сервіси та ігри.",
      image_url: 'https://lpnu.ua/sites/default/files/styles/fotorama_1200x800/public/2021/8/19/para/gallery/iotzakhplv-2020-1.jpg?itok=qaNNEUWp',
    },
    {
      title: "Вебінар «Штучний інтелект у медицині»",
      description: "Проведено відкритий вебінар про застосування AI в медичних дослідженнях за участі фахівців з Німеччини.",
      image_url: 'https://mindscope.biz.ua/wp-content/uploads/2024/11/debfd71b-d060-4443-9340-c2c971ea81f4_result.jpg',
    },
    {
      title: "Конкурс стартапів серед студентів",
      description: "Переможцем конкурсу став проєкт 'GreenCampus' з ідеєю енергоефективного моніторингу аудиторій.",
      image_url: 'https://osvita.rayon.in.ua/upload/news/37/2024-09/10-8GYKTw26/U-MAN-3__66e03f8530f30.jpg',
    },
    {
      title: "Оновлено навчальні плани",
      description: "З нового навчального року додано курси з DevOps, Cloud-сервісів та AI-архітектур.",
      image_url: 'https://fs06.vseosvita.ua/0600wk3t-54c6-1200x0.jpg',
    },
    {
      title: "Факультет отримав грант на дослідження у сфері AR/VR",
      description: "У рамках міжнародної співпраці факультет виграв грант на розвиток освітніх проєктів з доповненою реальністю.",
      image_url: 'https://24framesdigital.com/images/blogs-banner/ar-vr-differenceAR&VR_AGM_1200X600.jpg',
    },
    {
      title: "Підвищено стипендії для кращих студентів",
      description: "З 1 вересня стипендії буде підвищено на 20% для тих, хто має високий середній бал та бере участь у науковій діяльності.",
      image_url: 'https://lpnu.ua/sites/default/files/2021/12/28/news/18150/stypendia.jpg',
    },
  ]);
  await Gallery.bulkCreate([
    {
      description: "Розпочато набір на курси з кібербезпеки",
      image_url: 'https://osvita.loda.gov.ua/img/blog/pages-cover/1685102282.jpeg',
    },
    {
      description: "Успішний виступ команди на олімпіаді з програмування",
      image_url: 'https://mon.gov.ua/static-objects/mon/resources/resize/820_360_0_0_auto/img_a074ad5ac10833aff73340f9a1a72c9b.jpg',
    },
    {
      description: "Відбулася зустріч з роботодавцями",
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTAGQeT8NaniyMNFvUx8HezL4RrukaTfB9Q&s',
    },
    {
      description: "Успішне завершення проектної практики",
      image_url: 'https://lpnu.ua/sites/default/files/styles/fotorama_1200x800/public/2021/8/19/para/gallery/iotzakhplv-2020-1.jpg?itok=qaNNEUWp',
    },
    {
      description: "Вебінар «Штучний інтелект у медицині»",
      image_url: 'https://mindscope.biz.ua/wp-content/uploads/2024/11/debfd71b-d060-4443-9340-c2c971ea81f4_result.jpg',
    },
    {
      description: "Конкурс стартапів серед студентів",
      image_url: 'https://osvita.rayon.in.ua/upload/news/37/2024-09/10-8GYKTw26/U-MAN-3__66e03f8530f30.jpg',
    },
    {
      description: "Оновлено навчальні плани",
      image_url: 'https://fs06.vseosvita.ua/0600wk3t-54c6-1200x0.jpg',
    },
    {
      description: "Факультет отримав грант на дослідження у сфері AR/VR",
      image_url: 'https://24framesdigital.com/images/blogs-banner/ar-vr-differenceAR&VR_AGM_1200X600.jpg',
    },
    {
      description: "Підвищено стипендії для кращих студентів",
      image_url: 'https://lpnu.ua/sites/default/files/2021/12/28/news/18150/stypendia.jpg',
    },
    {
      description: "Студенти під час захисту курсових проєктів",
      image_url: 'https://financial.lnu.edu.ua/wp-content/uploads/2025/05/IMG-13d9d2c6e0c98fdf84f0fb64b7c6f3a0-V.jpg',
    },
    {
      description: "Лекція з хмарних технологій у новій комп'ютерній аудиторії",
      image_url: 'https://uculeadership.com.ua/assets/uploads/2020/10/92f948bd-38df-43c9-aee8-4d472fbc9433.jpg',
    },
    {
      description: "Команда факультету на олімпіаді з алгоритмів",
      image_url: 'https://static.wixstatic.com/media/ce0a32_774a47dd5ba44c88a55219c320d45dc0~mv2.jpg/v1/fill/w_772,h_446,fp_0.50_0.35,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ejgoi-sel-25-egoi.jpg',
    },
    {
      description: "Майстер-клас з розробки мобільних додатків",
      image_url: 'https://tickikids.ams3.cdn.digitaloceanspaces.com/z1.cache/gallery/activities/72055/image_65b3d953e648d6.51232980.jpg',
    },
    {
      description: "Урочисте відкриття ІоТ лабораторії",
      image_url: 'https://electronics.lnu.edu.ua/wp-content/uploads/2-1-1024x585.png',
    },
    {
      description: "Спільне фото після участі у студентському хакатоні",
      image_url: 'https://lpnu.ua/sites/default/files/2025/6/5/news/32006/img1611-t.jpg',
    },
    {
      description: "Викладач пояснює архітектуру веб-додатків",
      image_url: 'https://ud.org.ua/images/IMG_0008.jpg',
    },
    {
      description: "Практичне заняття з робототехніки",
      image_url: 'https://s3.eu-central-1.amazonaws.com/ucu.edu.ua/wp-content/uploads/2025/02/Den-PRYvidkrytyh-dverej-na-fakulteti.jpg',
    },
    {
      description: "Зустріч з представниками провідних ІТ-компаній",
      image_url: 'https://www.it.ua/uploads/thumb/0/media_single/4276-493678739_122253032648193021_4472226060963714700_n.jpg?1747905469',
    },

  ]);
  await Event.bulkCreate([
    { title: 'Успішний виступ команди на олімпіаді з програмування', image_url: 'https://mon.gov.ua/static-objects/mon/resources/resize/820_360_0_0_auto/img_a074ad5ac10833aff73340f9a1a72c9b.jpg' },
    { title: 'Успішне завершення проектної практики', image_url: 'https://lpnu.ua/sites/default/files/styles/fotorama_1200x800/public/2021/8/19/para/gallery/iotzakhplv-2020-1.jpg?itok=qaNNEUWp' },
    { title: 'Конкурс стартапів серед студентів', image_url: 'https://osvita.rayon.in.ua/upload/news/37/2024-09/10-8GYKTw26/U-MAN-3__66e03f8530f30.jpg' },
    { title: 'Команда факультету на олімпіаді з алгоритмів', image_url: 'https://static.wixstatic.com/media/ce0a32_774a47dd5ba44c88a55219c320d45dc0~mv2.jpg/v1/fill/w_772,h_446,fp_0.50_0.35,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ejgoi-sel-25-egoi.jpg' },
  ]);
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

module.exports = app;