import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import hinnn from './hinn.jpg';

const Products = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [flavor, setFlavor] = useState('Говядина');

  const cardStyle = {
    width: '18rem',
    backgroundColor: 'rgb(202, 164, 116)'
  };


  const handleQuantityChange1 = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  const handleQuantityChange2 = (e) => {
        setQuantity(parseInt(e.target.value));
    };
  const handleQuantityChange3 = (e) => {
        setQuantity(parseInt(e.target.value));
    };
  const handleQuantityChange4 = (e) => {
        setQuantity(parseInt(e.target.value));
    };
  const handleQuantityChange5 = (e) => {
        setQuantity(parseInt(e.target.value));
    };
  const handleQuantityChange6 = (e) => {
        setQuantity(parseInt(e.target.value));
    };

  const handleFlavorChange1 = (e) => {
    setFlavor(e.target.value);
  };
  const handleFlavorChange2 = (e) => {
        setFlavor(e.target.value);
    };
  const handleFlavorChange3 = (e) => {
        setFlavor(e.target.value);
    };
  const handleFlavorChange4 = (e) => {
        setFlavor(e.target.value);
    };
  const handleFlavorChange5 = (e) => {
        setFlavor(e.target.value);
    };
  const handleFlavorChange6 = (e) => {
        setFlavor(e.target.value);
    };

  const handleAddToCart1 = () => {
    addToCart({ name: 'Пельмени', quantity: quantity, flavor: flavor, price: 350 }); 
  };
  const handleAddToCart2 = () => {
        addToCart({ name: 'Хинкали', quantity: quantity, flavor: flavor, price: 400 });
    };
  const handleAddToCart3 = () => {
        addToCart({ name: 'Вареники', quantity: quantity, flavor: flavor, price: 350 });
    };
  const handleAddToCart4 = () => {
        addToCart({ name: 'Манты', quantity: quantity, flavor: flavor, price: 400 });
    };
  const handleAddToCart5 = () => {
        addToCart({ name: 'Равиоли', quantity: quantity, flavor: flavor, price: 500 });
    };
  const handleAddToCart6 = () => {
        addToCart({ name: 'Гедза', quantity: quantity, flavor: flavor, price: 350 });
    };

  return (
    <div>
      <h2 className="text-center mt-4 mb-3">Товары</h2>
      <Row>
        <Col sm={6} className='mb-3'>
          <Card style={cardStyle}>
            <Card.Img variant="top" src="https://vostorg.buzz/uploads/posts/2022-04/1648950170_25-vostorg-buzz-p-pelmeni-s-bulonom-i-smetanoi-43.jpg" />
            <Card.Body>
              <Card.Title>Пельмени</Card.Title>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Количество:</Form.Label>
                  <Col sm="8">
                    <Form.Control type="number" min = '1' value={quantity} onChange={handleQuantityChange1} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Вкус:</Form.Label>
                  <Col sm="8">
                    <Form.Select value={flavor} onChange={handleFlavorChange1}>
                      <option value="Говядина">Говядина</option>
                      <option value="Свинина">Свинина</option>
                      <option value="Курица">Курица</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form>
              <Link to="/blog">Просмотреть меню</Link>
              <hr />
              <Button onClick={handleAddToCart1}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6}>
          <Card style={cardStyle}>
            <Card.Img variant="top" src="https://img.goodfon.ru/wallpaper/nbig/e/d4/khinkali-bulon-zelen.jpg" />
            <Card.Body>
              <Card.Title>Хинкали</Card.Title>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Количество:</Form.Label>
                  <Col sm="8">
                    <Form.Control type="number" min = '1' value={quantity} onChange={handleQuantityChange2} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Вкус:</Form.Label>
                  <Col sm="8">
                    <Form.Select value={flavor} onChange={handleFlavorChange2}>
                      <option value="Говядина">Говядина</option>
                      <option value="Свинина">Свинина</option>
                      <option value="Баранина">Баранина</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form>
              <Link to="/blog">Просмотреть меню</Link>
              <hr />
              <Button onClick={handleAddToCart2}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* След карточки  */}
      <Row>
        <Col sm={6}>
          <Card style={cardStyle}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/Ya4eoEL42N4/maxresdefault.jpg" />
            <Card.Body>
              <Card.Title>Вареники</Card.Title>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Количество:</Form.Label>
                  <Col sm="8">
                    <Form.Control type="number" min = '1' value={quantity} onChange={handleQuantityChange3} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Вкус:</Form.Label>
                  <Col sm="8">
                    <Form.Select value={flavor} onChange={handleFlavorChange3}>
                      <option value="Сметана">Сметана</option>
                      <option value="Вишня">Вишня</option>
                      <option value="Клубника">Клубника</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form>
              <Link to="/blog">Просмотреть меню</Link>
              <hr />
              <Button onClick={handleAddToCart3}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} className='mb-3'>
          <Card style={cardStyle}>
            <Card.Img variant="top" src="https://food.pibig.info/uploads/posts/2023-03/1678399889_food-pibig-info-p-manti-oshskie-pinterest-77.jpg" />
            <Card.Body>
              <Card.Title>Манты</Card.Title>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Количество:</Form.Label>
                  <Col sm="8">
                    <Form.Control type="number" min = '1' value={quantity} onChange={handleQuantityChange4} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Вкус:</Form.Label>
                  <Col sm="8">
                    <Form.Select value={flavor} onChange={handleFlavorChange4}>
                      <option value="Морковь">Морковь</option>
                      <option value="Тыква">Тыква</option>
                      <option value="Говядина">Говядина</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form>
              <Link to="/blog">Посмотреть меню</Link>
              <hr />
              <Button onClick={handleAddToCart4}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
          {/* След карточки  */}
          <Row>
              <Col sm={6}>
                  <Card style={cardStyle}>
                      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/tortellini-%D1%81-%D0%BA%D1%80%D0%B5%D0%B2%D0%B5%D1%82%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B8-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D1%8B%D0%BC-ragout-%D1%86%D1%83%D0%BA%D0%B8%D0%BD%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F-%D1%81%D0%BB%D1%83%D0%B6%D0%B0-%D0%B1%D0%B5%D0%BB%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B8%D1%82%D0%B0-150405114.jpg" />
                      <Card.Body>
                          <Card.Title>Равиоли</Card.Title>
                          <Form>
                              <Form.Group as={Row} className="mb-3">
                                  <Form.Label column sm="4">Количество:</Form.Label>
                                  <Col sm="8">
                                      <Form.Control type="number" min = '1' value={quantity} onChange={handleQuantityChange5} />
                                  </Col>
                              </Form.Group>
                              <Form.Group as={Row} className="mb-3">
                                  <Form.Label column sm="4">Вкус:</Form.Label>
                                  <Col sm="8">
                                      <Form.Select value={flavor} onChange={handleFlavorChange5}>
                                          <option value="Лосось">Лосось</option>
                                          <option value="Утка">Утка</option>
                                          <option value="Шпинат">Шпинат</option>
                                      </Form.Select>
                                  </Col>
                              </Form.Group>
                          </Form>
                          <Link to="/blog">Посмотреть меню</Link>
                          <hr />
                          <Button onClick={handleAddToCart5}>Добавить в корзину</Button>
                      </Card.Body>
                  </Card>
              </Col>

              <Col sm={6} className='mb-3'>
                  <Card style={cardStyle}>
                      <Card.Img variant="top" src="https://100foto.club/uploads/posts/2022-06/1655936167_19-100foto-club-p-gedza-vegetarianskie-34.jpg" />
                      <Card.Body>
                          <Card.Title>Гедза</Card.Title>
                          <Form>
                              <Form.Group as={Row} className="mb-3">
                                  <Form.Label column sm="4">Количество:</Form.Label>
                                  <Col sm="8">
                                      <Form.Control type="number" min = '1' value={quantity} onChange={handleQuantityChange6} />
                                  </Col>
                              </Form.Group>
                              <Form.Group as={Row} className="mb-3">
                                  <Form.Label column sm="4">Вкус:</Form.Label>
                                  <Col sm="8">
                                      <Form.Select value={flavor} onChange={handleFlavorChange6}>
                                          <option value="Яблоко">Яблоко</option>
                                          <option value="Груша">Груша</option>
                                          <option value="Лисички">Лисички</option>
                                      </Form.Select>
                                  </Col>
                              </Form.Group>
                          </Form>
                          <Link to="/blog">Посмотреть меню</Link>
                          <hr />
                          <Button onClick={handleAddToCart6}>Добавить в корзину</Button>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
    </div>
  );
};

export default Products;