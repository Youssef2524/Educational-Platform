import React from "react";
import classes from "./ChooseUs.css?inline";

import {Accordion, Col, Container, Row} from "react-bootstrap";
import {items} from '../../const/choose'
import AccordionItem from "react-bootstrap/AccordionItem";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

const ChooseUs = (props) => {
    return (
        <div className={classes.whySection}>
            <Container>
                <Row>
                    <Col lg={5} className={"me-auto mb-5 mb-lg-0 aos-init aos-animate"} data-aos="fade-up" data-aos-delay="0">
                        <img src={props.img} alt="image" className="img-fluid"/>
                    </Col>
                    <Col lg={7} className={"mt-10 aos-init aos-animate"} data-aos="fade-up" data-aos-delay="100">
                        <h3 className={`${classes.lineBottom} line-bottom mb-4`}>{props.title}</h3>
                        <p>{props.desc}</p>
                        <Accordion defaultActiveKey={0}>
                            {items.map((item, key) => (
                                <AccordionItem className={classes.accordion} key={key} eventKey={key}>
                                    <Accordion.Header className={classes.accordionHeader}>{item.title}</Accordion.Header>
                                    <Accordion.Body className={classes.accBody}>
                                        <div>
                                            <div className={`${classes.AccImage} me-4`}>
                                                <img className={"img-fluid"} src={item.image}/>
                                            </div>
                                            {item.desc}
                                        </div>
                                    </Accordion.Body>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ChooseUs;