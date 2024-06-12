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


  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleFlavorChange = (e) => {
    setFlavor(e.target.value);
  };

  const handleAddToCart = () => {
    addToCart({ name: 'Пельмени', quantity: quantity, flavor: flavor, price: 80 }); 
  };

  return (
    <div>
      <h2 className="text-center mt-4 mb-3">Товары</h2>
      <Row>
        <Col sm={6} className='mb-3'>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={hinnn} />
            <Card.Body>
              <Card.Title>Пельмени</Card.Title>
              <Card.Text>Ебейщие пельмени. 80 Руб.</Card.Text>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Количество:</Form.Label>
                  <Col sm="8">
                    <Form.Control type="number" value={quantity} onChange={handleQuantityChange} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Вкус:</Form.Label>
                  <Col sm="8">
                    <Form.Select value={flavor} onChange={handleFlavorChange}>
                      <option value="Говядина">Говядина</option>
                      <option value="Свинина">Свинина</option>
                      <option value="Курица">Курица</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form>
              <Link to="/blog">Просмотреть заказ</Link>
              <hr />
              <Button onClick={handleAddToCart}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6}>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={hinnn} />
            <Card.Body>
              <Card.Title>Хинкали</Card.Title>
              <Card.Text>Ебейщие хинкали. 80 Руб.</Card.Text>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Количество:</Form.Label>
                  <Col sm="8">
                    <Form.Control type="number" value={quantity} onChange={handleQuantityChange} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Вкус:</Form.Label>
                  <Col sm="8">
                    <Form.Select value={flavor} onChange={handleFlavorChange}>
                      <option value="Говядина">Говядина</option>
                      <option value="Свинина">Свинина</option>
                      <option value="Курица">Лисички</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form>
              <Link to="/blog">Просмотреть заказ</Link>
              <hr />
              <Button onClick={handleAddToCart}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* След карточки  */}
      <Row>
        <Col sm={6}>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={hinnn} />
            <Card.Body>
              <Card.Title>Пельмени</Card.Title>
              <Card.Text>Ебейщие пельмени. 80 Руб.</Card.Text>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Количество:</Form.Label>
                  <Col sm="8">
                    <Form.Control type="number" value={quantity} onChange={handleQuantityChange} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Вкус:</Form.Label>
                  <Col sm="8">
                    <Form.Select value={flavor} onChange={handleFlavorChange}>
                      <option value="Говядина">Говядина</option>
                      <option value="Свинина">Свинина</option>
                      <option value="Курица">Курица</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form>
              <Link to="/blog">Просмотреть заказ</Link>
              <hr />
              <Button onClick={handleAddToCart}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} className='mb-3'>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={hinnn} />
            <Card.Body>
              <Card.Title>Хинкали</Card.Title>
              <Card.Text>Ебейщие хинкали. 80 Руб.</Card.Text>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Количество:</Form.Label>
                  <Col sm="8">
                    <Form.Control type="number" value={quantity} onChange={handleQuantityChange} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Вкус:</Form.Label>
                  <Col sm="8">
                    <Form.Select value={flavor} onChange={handleFlavorChange}>
                      <option value="Говядина">Говядина</option>
                      <option value="Свинина">Свинина</option>
                      <option value="Курица">Лисички</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form>
              <Link to="/blog">Просмотреть заказ</Link>
              <hr />
              <Button onClick={handleAddToCart}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* След карточки  */}
    </div>
  );
};

export default Products;