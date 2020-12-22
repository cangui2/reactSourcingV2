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


    if (props.cv.length !== 0)
        return (




                        <CVViewer cv={props.cv} />







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