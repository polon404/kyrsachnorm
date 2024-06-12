import React, { Component} from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css';
import hinki from './hinki.jpg'
import hin from './hin.jpg'
import { Link } from 'react-router-dom';



export default class Blog extends Component {
    render() {
      return (
        <div className="main-container">
          {/* <h1 className="text-center">Популярное</h1> */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_655cb1e54e1b222949c03e60_655cb1f40e541922b48c783b/scale_1200"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Хинкали</h3>
                <p>Полных людей труднее похитить! Будьте в безопасности, поешьте до отвала наших хинкали!</p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* след карусель если надо */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://sanya-anya.ru/wp-content/uploads/kak-prigotovit-domashnie-pelmeni-recept-bystryj-i-prostoj-03.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Пельмени</h3>
                <p>Динозавры никогда не пробовали наши пельмени - и теперь они все вымерли!</p>
          <hr/>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Container>
            <h2 className="text-center mt-5 mb-3">Меню</h2>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://vostorg.buzz/uploads/posts/2022-04/1648950170_25-vostorg-buzz-p-pelmeni-s-bulonom-i-smetanoi-43.jpg" />
                  <Card.Body>
                    <Card.Title>Пельмени "Домашние"</Card.Title>
                    <Card.Text>Домашние пельмени – как у бабушки! Мы с гордостью представляем пельмени, приготовленные по традиционным домашним рецептам.</Card.Text>
                    <Link to="/blog">Подробнее</Link> 
                  </Card.Body>
                </Card>
              </Col>
              {/* след товар */}
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://img.goodfon.ru/wallpaper/nbig/e/d4/khinkali-bulon-zelen.jpg" />
                  <Card.Body>
                    <Card.Title>Хинкали с бараниной</Card.Title>
                    <Card.Text>Хинкали, которые тают во рту. Насладись истинным вкусом домашней еды!</Card.Text>
                    <Link to="/blog">Подробнее</Link> 
                  </Card.Body>
                </Card>
              </Col>
              {/* след товар */}
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://i.ytimg.com/vi/Ya4eoEL42N4/maxresdefault.jpg" />
                  <Card.Body>
                    <Card.Title>Вареники с вишней</Card.Title>
                    <Card.Text>Вкус, который невозможно забыть! Попробуйте вареники, приготовленные по семейному рецепту с использованием только натуральных ингредиентов.</Card.Text>
                    <Link to="/blog">Подробнее</Link> 
                  </Card.Body>
                </Card>
              </Col>
              {/* след товар */}
              
            </Row>
            <h2 className="text-center mt-5 mb-3">Акции</h2>
            <Row>
              <Col md={6}>
                <Card>
                  <Card.Img variant="top" src="https://kulinariya.lichnorastu.ru/wp-content/uploads/2014/09/2630.jpg" />
                  <Card.Body>
                    <Card.Title>Скидка на всю компанию!</Card.Title>
                    <Card.Text>Возьми большой набор на всю компанию со скидкой в 20%!</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* след акции */}
              <Col md={6}>
                <Card>
                  <Card.Img variant="top" src="https://izjum.ru/wp-content/uploads/2019/07/%D0%9F%D0%B5%D0%BB%D1%8C%D0%BC%D0%B5%D0%BD%D0%B8-%D0%94%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B5-1.jpg" />
                  <Card.Body>
                    <Card.Title>Скидка на первый заказ!</Card.Title>
                    <Card.Text>На первый заказ действует скидка в 15%!</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/*  след акции */}
            </Row>
          </Container>
        </div>
      );
    };
}    