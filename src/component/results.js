import {Container, Row, Card, Col, Pagination, Image, Media, Button, CardColumns} from "react-bootstrap";
import React from "react";
import image from "../avatar.png"


function Results (props){


    return(


            <Row>
                <Col>

                    {props.liste.map(item => (
                        <div onClick={()=>{props.onReceiveCv(item.id)}}>
                            <CardColumns>
                            <Card style={styleSearch} >

                                <Card.Body  >
                                    <Card.Title>{item.nom} </Card.Title> <Image style={{float: 'right',width:'15%'}} src={image} roundedCircle />
                                    <Card.Subtitle className="mb-2 text-muted">{item.prenom}</Card.Subtitle>
                                    <Card.Text>
                                        Adresse :{item.adresse}
                                        <br/>
                                        Numero de Telephone : {item.telephone}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </CardColumns>
                        </div>
                    ))}

                </Col>
            </Row>
    )



};

export default Results;
const styleSearch={


    width: '38rem',
    marginTop:'10px',
    boxShadow: "10px 10px 1px #9E9E9E",
    backgroundColor:'white',
    opacity:'0.9',


}

