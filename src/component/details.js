import React, {useState} from "react";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {pdfjs} from 'react-pdf'
import image from "../avatar.png";
import CVViewer from "./CVViewer";
import * as PropTypes from "prop-types";


class Fragment extends React.Component {
    render() {
        return null;
    }
}

Fragment.propTypes = {children: PropTypes.node};

function Details (props) {



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
