import React, { Component} from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import CardBody from '../../node_modules/react-bootstrap/esm/CardBody';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


export default class Blog extends Component {
    render() {
      return (
        <div className="main-container">
          {/* <h1 className="text-center">Популярное</h1> */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://hdpic.club/uploads/posts/2021-12/1640182648_25-hdpic-club-p-mazda-rx7-37.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>UNDERGROUND</h3>
                <p>8-9 сентября, Севкабель порт</p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* след карусель если надо */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://c.wallhere.com/photos/0e/71/1920x1080_px_Green_Cars_JDM_Nissan_Nissan_240SX-1096098.jpg!d"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>UNDERGROUND</h3>
                <p>8-9 сентября, Севкабель порт</p>
          <hr/>
              </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src="https://img.goodfon.ru/original/1600x900/e/b5/christer-stormark-by-christer-stormark-r32-skyline-white-edi.jpg"
                          alt="First slide"
                      />
                      <Carousel.Caption>
                          <h3>UNDERGROUND</h3>
                <p>8-9 сентября, Севкабель порт</p>
                          <hr />
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src="https://a-static.besthdwallpaper.com/red-toyota-supra-mk4-with-bady-kit-applied-wallpaper-1600x900-92502_47.jpg"
                          alt="First slide"
                      />
                      <Carousel.Caption>
                          <h3>UNDERGROUND</h3>
                <p>8-9 сентября, Севкабель порт</p>
                          <hr />
                      </Carousel.Caption>
                  </Carousel.Item>
              </Carousel>

          <Container>
            <h2 className="text-center mt-5 mb-3">О мероприятии</h2>
              <Col md={12}>
                <Card>
                  <Card.Body>
                    <Card.Title>UNDERGROUND -</Card.Title>
                    <Card.Text> это мероприятие, на котором представлены автомобили с заниженным клиренсом и экстремальными параметрами углов постановки колёс. Экспозиция проходит в        Севкабель Порт в Санкт-Петербурге. На выставке можно увидеть автомобили разных марок и моделей, выполненные в стиле стенс.</Card.Text>
                    <Link to="/blog">Подробнее</Link> 
                  </Card.Body>
                </Card>
              </Col>
              {/* след товар */}
            <h2 className="text-center mt-5 mb-3">Галлерея</h2>
            <Row>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src="https://avatars.dzeninfra.ru/get-zen_doc/3690562/pub_5f32e926f8858d597854a480_5f32ea08a0afa33797cbb37a/scale_1200" />
                  <CardBody>
                    <Link to="/gallery">Подробнее</Link> 
                  </CardBody>
                </Card>
              </Col>
              {/* след акции */}
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src="https://kartinki.pics/pics/uploads/posts/2022-08/thumbs/1661466317_33-kartinkin-net-p-yaponskie-mashini-dlya-drifta-oboi-krasivo-42.jpg" />
                  <CardBody>
                    <Link to="/gallery">Подробнее</Link> 
                  </CardBody>
                </Card>
              </Col>
              {/*  след акции */}
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src="https://klike.net/uploads/posts/2023-01/1674994328_4-57.jpg" />
                  <CardBody>
                    <Link to="/gallery">Подробнее</Link> 
                  </CardBody>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src="https://happylove.top/uploads/posts/2023-06/thumbs/1685606890_happylove-top-p-starii-tokio-vkontakte-48.jpg" />
                  <CardBody>
                    <Link to="/gallery">Подробнее</Link> 
                  </CardBody>
                </Card>
              </Col>
              <h2 className="text-center mt-5 mb-3">Как нас найти</h2>
              <Col md={12}>
                <Card>
                  <CardBody>
                    <YMaps>
                      <Map width='100%' height='500px'defaultState={{ center: [59.924172, 30.240778], zoom: 15 }}>
                        <Placemark defaultGeometry={[59.924172, 30.240778]} />
                      </Map>
                    </YMaps>
                    <Card.Text>Севкабель Порт, Кожевенная линия, 40Б, Санкт-Петербург</Card.Text>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );
    };
}    