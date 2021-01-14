import {Container, Row, Card, Col, Pagination, Image, Media, Button, CardColumns, Badge} from "react-bootstrap";
import React, {useState} from "react";
import image from "../avatar.png"


function Results (props){

    const [select, setSelect]=useState(false)
    console.log(select);





    return(


            <Row>
                <Col>

                    {props.liste.map((item,index) => (

                        <div key={index} onClick={()=>{props.onReceiveCv(item.id);setSelect(index)}} >

                            <CardColumns>
                            <Card style={styleSearch}>

                                <Card.Body>

                                    <Card.Title>{item.metLibele}

                                    </Card.Title>
                                    <Image style={{float: 'right',width:'15%'}} src={image} roundedCircle />
                                    <Card.Subtitle className="mb-2 text-muted">{item.nom} {item.prenom}</Card.Subtitle>
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



};

export default Results;
const styleSearch={


    width: '38rem',
    marginTop:'10px',
    boxShadow: "10px 10px 1px #9E9E9E",
    //backgroundColor:'black',
    opacity:'0.9',


}
const test ={
    backgroundColor:'black',
}

