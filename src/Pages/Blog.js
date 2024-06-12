import React, { Component} from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import hinnn from '../hinn.jpg';


export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
            <h2 className="text-center mt-5 mb-3"> </h2>
                <Col md={12}>
                    <Card className="mb-3">
                            <Card.Img variant="top" src="https://avatars.dzeninfra.ru/get-zen_doc/1931664/pub_5fed439dbb14d54ffbac0252_5fed4440af142f0b17704cd0/scale_1200" />
                        <Card.Body>
                                <Card.Text>Также на мероприятии присутствуют конкурсы, дрифт-шоу, зона тюнинга и многое другое. UNDERGROUND является местом встречи для любителей экстремального тюнинга и автомобильной культуры. В рамках мероприятия проводятся различные конкурсы, выставки и мастер-классы, а также организованы развлекательные мероприятия.

                                    UNDERGROUND - это не просто выставка автомобилей, а целая культурная площадка, где люди делятся своими идеями, находят новых друзей и общаются на общих интересах. Мероприятие привлекает как профессиональных тюнинговщиков, так и любителей автомобилей, которые хотят познакомиться с миром экстремального тюнинга. В целом, UNDERGROUND - это яркое и захватывающее событие, которое каждый год привлекает все больше участников и зрителей.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
                </Container>
        )
    }
}
