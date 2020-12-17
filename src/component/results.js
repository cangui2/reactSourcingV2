import {Container, Row, Card, Col, Pagination} from "react-bootstrap";
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




console.log(props.liste+'dans result')

    return(
        <Container fluid>
            <Row>
                <Col xs={6}>

                    {props.liste.map(item => (
                        <div onClick={()=>{props.onReceiveCv(item.candidat.id)}}>
                            <Card style={styleSearch} >
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
                        </div>
                    ))}


                    {props.allCv.map(item => (
                        <Card style={styleSearch}>
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
                        <Card style={styleSearch}>
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
const styleSearch={

    //border:'2px solid #000000',
    width: '38rem',
    marginTop:'10px',
    boxShadow: "5px 10px 1px #9E9E9E",

}