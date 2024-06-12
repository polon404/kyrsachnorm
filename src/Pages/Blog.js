import React, { Component} from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import hinnn from '../hinn.jpg';


export default class Blog extends Component {
    render() {
        return (
            <Container>
            <Row>
                <h2 className="text-center mt-5 mb-3">Меню</h2>
                <Col md={4}>
                    <Card className="mb-3">
                        <Card.Img variant="top" src="https://vostorg.buzz/uploads/posts/2022-04/1648950170_25-vostorg-buzz-p-pelmeni-s-bulonom-i-smetanoi-43.jpg" />
                        <Card.Body>
                            <Card.Title>Пельмени "Домашнии"</Card.Title>
                            <Card.Text>Состав: фарш мясной, лук репчатый, соль, перец, мука, вода, яйца. Стоимость: 350₽</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* след товар */}
                <Col md={4}>
                    <Card className="mb-3">
                        <Card.Img variant="top" src="https://img.goodfon.ru/wallpaper/nbig/e/d4/khinkali-bulon-zelen.jpg" />
                        <Card.Body>
                            <Card.Title>Хинкали с бараниной</Card.Title>
                                <Card.Text>Состав: фарш из баранины, лук красный, чеснок, кинза, петрушка, сухая аджика, сумах, черный перец, мука, вода, яйца. Стоимость: 400₽</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* след товар */}
                <Col md={4}>
                    <Card className="mb-3">
                        <Card.Img variant="top" src="https://i.ytimg.com/vi/Ya4eoEL42N4/maxresdefault.jpg" />
                        <Card.Body>
                            <Card.Title>Вареники с вишней</Card.Title>
                                <Card.Text>Состав: вишня без косточек, сахар, сметана, соль, мука, вода, яйца. Стоимость: 350₽</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* след товар */}
                <Col md={4}>
                    <Card className="mb-3">
                        <Card.Img variant="top" src="https://food.pibig.info/uploads/posts/2023-03/1678399889_food-pibig-info-p-manti-oshskie-pinterest-77.jpg" />
                        <Card.Body>
                            <Card.Title>Манты с тыквой и морковью</Card.Title>
                            <Card.Text>Состав: тыква, картофель, лук, морковь, масло, соль, перец. Стоимость: 400₽</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* след товар */}
                <Col md={4}>
                    <Card className="mb-3">
                        <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/tortellini-%D1%81-%D0%BA%D1%80%D0%B5%D0%B2%D0%B5%D1%82%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B8-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D1%8B%D0%BC-ragout-%D1%86%D1%83%D0%BA%D0%B8%D0%BD%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F-%D1%81%D0%BB%D1%83%D0%B6%D0%B0-%D0%B1%D0%B5%D0%BB%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B8%D1%82%D0%B0-150405114.jpg" />
                        <Card.Body>
                            <Card.Title>Равиоли с лососем</Card.Title>
                            <Card.Text>Состав: лук, лимон, лосось, риккота, перец, соль, мука, вода, яйца, масло. Стоимость: 500₽</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* след товар */}
                <Col md={4}>
                    <Card className="mb-3">
                        <Card.Img variant="top" src="https://100foto.club/uploads/posts/2022-06/1655936167_19-100foto-club-p-gedza-vegetarianskie-34.jpg" />
                        <Card.Body>
                            <Card.Title>Гедза с яблоками и корицей</Card.Title>
                            <Card.Text>Состав: яблоки, сахар, корица, мука, вода, яйца, соль. Стоимость: 350₽</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
                </Container>
        )
    }
}
