import React, {useState} from "react";
import  {Container, Row,Col,Card} from "react-bootstrap";
import {  Document, Page, pdfjs } from 'react-pdf'
import pdf from '../1.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


function TEST (props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

if (props.cv.length !== 0)
    return(
        <Container fluid>
            <Row>
                <Col>
            <Card style={styleSearch} >
                <Card.Body  >
                    <Card.Title>{props.cv.nom}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.cv.prenom}</Card.Subtitle>
                    <Card.Text>
                        Adresse :{props.cv.adresse}
                        <br/>
                        Numero de Telephone : {props.cv.telephone}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>

            </Card>

                </Col>




            </Row>
            <Row>
                <Col>
                    <div>
                        <Document
                            file="1.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                        <p>Page {pageNumber} of {numPages}</p>
                    </div>
                </Col>
            </Row>
        </Container>

    )
else if (props.cv.length === 0) {
    return (
        <div>aurevoir </div>
    )
}
}
export default TEST;
const styleSearch={

    //border:'2px solid #000000',
    width: '38rem',
    marginTop:'10px',
    boxShadow: "5px 10px 1px #9E9E9E",

}