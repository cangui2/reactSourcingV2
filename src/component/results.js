import {Breadcrumb, Card, CardColumns, Col, Image, Row} from "react-bootstrap";
import React, {useState} from "react";
import image from "../avatar.png"


function Results(props) {
    const [select, setSelect] = useState('0')
    if (props.liste.length > 0) {
        return (
            <Row>
                <Col>
                    {props.liste.map((item, index) => (
                        <div onClick={() => {
                            props.onReceiveCv(item.id);
                            setSelect(index)
                        }}>
                            <CardColumns>
                                <Card style={styleSearch} key={index} className={select === index ? 'select' : ''}>
                                    <Card.Body>
                                        <Card.Title>{item.metLibele}
                                        </Card.Title>
                                        <Image style={{float: 'right', width: '15%'}} src={image} roundedCircle/>
                                        <Card.Subtitle
                                            className="mb-2 text-muted">{item.nom} {item.prenom}</Card.Subtitle>
                                        <Card.Text>
                                            {item.adresse}
                                            <br/>
                                            {item.ville}
                                            <br/>
                                            {item.telephone}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardColumns>
                        </div>
                    ))}
                </Col>
            </Row>
        )
    } else {
        return (
            <div></div>
        )
    }
};

export default Results;
const styleSearch = {
    width: '25rem',
    marginTop: '0px',
    boxShadow: "5px 5px 1px #9E9E9E",
    opacity: '0.9',
    cursor:'grab'
}




