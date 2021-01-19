import ReactDOM from 'react-dom';
import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import axios from 'axios'
import Search from "./component/search";
import Results from "./component/results";
import Details from "./component/details";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = (props) => {
    // all const
    const [liste, setListe] = useState([]);
    const [cvCandidat, setCvCandidat] = useState([]);
    const [noRefrech, setNoRefresh] = useState(true);
    /*-------------------------------------------------------------*/
    const handleCvRequest = (param) => {
            setNoRefresh(false);
        axios.get(`https://127.0.0.1:8000/api/sourcing?` + param)
            .then((result) => {
                setListe(result.data);
                setCvCandidat([]);
            })
            .catch(error => console.log(error));
    }
    const handleCv = (cv) => {
        axios.get(`https://127.0.0.1:8000/api/c_vs?id=` + cv)
            .then((result) => {
                setCvCandidat(result.data[0]);
            })
    }

    return (
        <Container fluid style={styleSearch}>
            <Row>
                <Col md={3}>
                    <Search
                        onDemandeCvChanged={(param) => handleCvRequest(param)}
                        total={liste.length}
                    />
                </Col>
                <Col md={4} style={border}>
                    <Results liste={liste} onReceiveCv={(cv) => handleCv(cv)}/>
                </Col>
                <Col md={5} style={border}>
                    <Details cv={cvCandidat}/>
                </Col>

            </Row>
        </Container>
    );
}

const styleSearch = {
    minHeight: "90vh",
}
const border = {
    minHeight: "90vh",
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('react_sourcing')
);


