import React, {useState} from "react";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {pdfjs} from 'react-pdf'
import image from "../avatar.png";
import CVViewer from "./CVViewer";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


function Details (props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    console.log(props.cv);
    if (props.cv.length !== 0)
        return (
            <Container fluid>
                <Row style={{marginLeft: '0', marginRight: '0', paddingTop: '10px !important'}}>
                    <Col>
                            <Card style={styleSearch}>
                                <Card.Body>
                                    <Card.Title>{props.cv.candidat.nom}</Card.Title><Image
                                    style={{float: 'right', width: '15%'}} src={image} roundedCircle/>
                                    <Card.Subtitle className="mb-2 text-muted">{props.cv.candidat.prenom}</Card.Subtitle>
                                    <Card.Text>
                                        Adresse :{props.cv.candidat.adresse}
                                        <br/>
                                        Numero de Telephone : {props.cv.candidat.telephone}
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>

                            </Card>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CVViewer cv={props.cv} />
                    </Col>
                </Row>



            </Container>

        )
    else if (props.cv.length === 0) {
        return (
            <div></div>
        )
    }
}

export default Details;


const styleSearch = {

    //border:'2px solid #000000',
    width: '38rem',
    marginTop: '10px',
    boxShadow: "1px 1px 1px #9E9E9E",
    backgroundColor: 'white',
    opacity: '0.9',

}