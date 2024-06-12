import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const Products = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const cardStyle = {
    width: '18rem',
    backgroundColor: 'rgb(0, 0, 0)'
  };


  const handleQuantityChange1 = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  const handleQuantityChange2 = (e) => {
        setQuantity(parseInt(e.target.value));
    };

  const handleAddToCart1 = () => {
    addToCart({ name: 'Стандартный билет - 1000₽', quantity: quantity, price: 1000 }); 
  };
  const handleAddToCart2 = () => {
      addToCart({ name: 'VIP-билет - 2000₽', quantity: quantity, price: 2000 });
    };

  return (
    <div>
      <h2 className="text-center mt-4 mb-3">Билеты</h2>
      <Row>
        <Col sm={12} className='mb-3'>
          <Card style={cardStyle}>
            <Card.Body>
              <Card.Title>Стандартный билет - 1000₽</Card.Title>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Количество:</Form.Label>
                  <Col sm="8">
                    <Form.Control type="number" min = '1' value={quantity} onChange={handleQuantityChange1} />
                  </Col>
                </Form.Group>
              </Form>
              <hr />
              <Button onClick={handleAddToCart1}>Добавить в корзину</Button>
            </Card.Body> 
          </Card>
        </Col>

        <Col sm={12}>
          <Card style={cardStyle}>
            <Card.Body>
              <Card.Title>VIP-билет - 2000₽</Card.Title>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">Количество:</Form.Label>
                  <Col sm="8">
                    <Form.Control type="number" min = '1' value={quantity} onChange={handleQuantityChange2} />
                  </Col>
                </Form.Group>
              </Form>
              <hr />
              <Button onClick={handleAddToCart2}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Products;