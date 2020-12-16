import {Container,Row,Card,Col} from "react-bootstrap";
import React from "react";
import TEST from "./cv";
import CVTEMPLATE from "./cvTemplate";
import CV from "./cvTemplate";



function Results (props){

    //const [items , setItems]=useState();


   // console.log(items+'results')

    // useEffect(()=>{
    //
    //     setItems(props.titre);
    //
    // }, [props.titre, items])






    return(
        <Container fluid>
            <Row>
                <Col xs={6}>
                    <div onClick={<TEST/>}>
                    {props.liste.map(item => (

                            <Card style={{width: '38rem', marginTop: '10px'}} >
                                <Card.Body  >
                                    <Card.Title>{item.candidat.nom}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{item.candidat.prenom}</Card.Subtitle>
                                    <Card.Text>
                                        Adresse :{item.candidat.adresse}
                                        <br/>
                                        Numero de Telephone : {item.candidat.telephone}
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>

                            </Card>

                    ))}
                    </div>
                    {props.allCv.map(item => (
                        <Card style={{width: '38rem', marginTop: '10px'}}>
                            <Card.Body>
                                <Card.Title>{item.candidat.nom}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{item.candidat.prenom}</Card.Subtitle>
                                <Card.Text>
                                    Adresse :{item.candidat.adresse}
                                    <br/>
                                    Numero de Telephone : {item.candidat.telephone}
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>

                        </Card>

                    ))}
                    {props.multi.map(item => (
                        <Card style={{width: '38rem', marginTop: '10px'}}>
                            <Card.Body>
                                <Card.Title>{item.candidat.nom}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{item.candidat.prenom}</Card.Subtitle>
                                <Card.Text>
                                    Adresse :{item.candidat.adresse}
                                    <br/>
                                    Numero de Telephone : {item.candidat.telephone}
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>

                        </Card>

                    ))}

                </Col>




            </Row>
        </Container>




    )



};

export default Results;