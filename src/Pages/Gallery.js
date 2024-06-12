import React, { Component } from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <h2 className="text-center mt-5 mb-3"> </h2>
                    <Col md={3}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src="http://cdn.motorpage.ru/Photos/800/7AE5.jpg" />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src="https://avatars.dzeninfra.ru/get-zen_doc/3412469/pub_5fd9cb3ab11a4f02b7565a32_5fd9cb73e7ae933e1e948f03/scale_1200" />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src="https://hdpic.club/photo/uploads/posts/2023-03/1679072404_hdpic-club-p-stil-avto-yaponskii-52.jpg" />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src="https://a.d-cd.net/BiAAAgPuxOA-1920.jpg" />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src="https://avatars.dzeninfra.ru/get-zen_doc/9429031/pub_640ada85508a173b5b300968_640add542641cf5c1797278e/scale_1200" />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/59/96/36/599636f7e8ed7a5588ad30a6a80517ac.jpg" />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src="https://a.d-cd.net/ead0b3es-1920.jpg" />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src="https://a.d-cd.net/1ad0b3es-1920.jpg" />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src="https://a.d-cd.net/5eae286s-1920.jpg" />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src="https://img.razrisyika.ru/kart/48/1200/190012-jdm-mashiny-8.jpg" />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src="https://klike.net/uploads/posts/2023-04/1680841513_3-34.jpg" />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src="https://a.d-cd.net/628e4cs-960.jpg" />
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
