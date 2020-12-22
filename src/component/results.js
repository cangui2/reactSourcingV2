import {Container, Row, Card, Col, Pagination, Image, Media, Button} from "react-bootstrap";
import React from "react";
import image from "../avatar.png"


function Results (props){

    // Voir pour la pagination
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number}>
                {number}
            </Pagination.Item>,
        );
    }
    const paginationBasic = (
        <div>
            <Pagination>{items}</Pagination>
            <br />
        </div>
    );






    return(

        <Container>
            <Row style={{marginLeft:'0',marginRight:'0',paddingTop:'10px '}}>

                <Col>


                    {props.liste.map(item => (
                        <div onClick={()=>{props.onReceiveCv(item.candidat.id)}}>
                            <Card style={styleSearch} >

                                <Card.Body  >
                                    <Card.Title>{item.candidat.nom} </Card.Title> <Image style={{float: 'right',width:'15%'}} src={image} roundedCircle />
                                    <Card.Subtitle className="mb-2 text-muted">{item.candidat.prenom}</Card.Subtitle>
                                    <Card.Text>
                                        Adresse :{item.candidat.adresse}
                                        <br/>
                                        Numero de Telephone : {item.candidat.telephone}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}


                    {props.allCv.map(item => (
                        <Col>
                            <div onClick={()=>{props.onReceiveCv(item.candidat.id)}}>
                            <Card style={styleSearch}>
                                <Card.Body>
                                    <Card.Title>{item.candidat.nom}</Card.Title><Image style={{float: 'right',width:'15%'}} src={image} roundedCircle />
                                    <Card.Subtitle className="mb-2 text-muted">{item.candidat.prenom}</Card.Subtitle>
                                    <Card.Text>
                                        Adresse :{item.candidat.adresse}
                                        <br/>
                                        Numero de Telephone : {item.candidat.telephone}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                        </Col>
                        ))}

                    {props.multi.map(item => (
                        <div onClick={()=>{props.onReceiveCv(item.candidat.id)}}>
                        <Card style={styleSearch}>
                            <Card.Body>
                                <Card.Title>{item.candidat.nom}</Card.Title><Image style={{float: 'right',width:'15%'}} src={image} roundedCircle />
                                <Card.Subtitle className="mb-2 text-muted">{item.candidat.prenom}</Card.Subtitle>
                                <Card.Text>
                                    Adresse :{item.candidat.adresse}
                                    <br/>
                                    Numero de Telephone : {item.candidat.telephone}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    ))}
                </Col>




            </Row>
        </Container>




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

