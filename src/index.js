import ReactDOM from 'react-dom';
import React, {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import axios from 'axios'
import Search from "./component/search";
import Results from "./component/results";
import Details from "./component/details";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = (props) => {
    // all const
    const [liste, setListe] = useState([]);
    const [item, setItem] = useState(null);
    const [cvCandidat, setCvCandidat] = useState([]);
    /*-------------------------------------------------------------*/
    const handleCvRequest = (param) => {

        // param -> keyword=sql&ville=amiens&recruteur=12
        console.log(param);
        console.log(axios.get(`https://127.0.0.1:8000/api/sourcing?`+ param));
        axios.get(`https://127.0.0.1:8000/api/sourcing?`+ param)

            .then((result) => {

                setListe(result.data);
                console.log(result.data)
                setCvCandidat([]);
            })
            .catch(error => console.log(error));
    }
    // Cv Candidat


    const handleCv = (cv) => {
        console.log(cv + 'requete id');
        console.log(axios.get(`https://127.0.0.1:8000/api/c_vs?metier.id=` + cv));
        axios.get(`https://127.0.0.1:8000/api/c_vs?id=` + cv)
            .then((result) => {

                setCvCandidat(result.data[0]);

            })
    }


    return (
        <Container fluid style={styleSearch}>
            <Row>
                <Col sm={3}>
                    <Search
                        onDemandeCvChanged={(param) => handleCvRequest(param)}

                    />
                </Col>

                <Col sm={4} style={border}>
                    <Results liste={liste} onReceiveCv={(cv) => handleCv(cv)}/>
                </Col>

                <Col sm={5} style={border}>
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


