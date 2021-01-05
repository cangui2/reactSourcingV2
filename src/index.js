import ReactDOM from 'react-dom';
import React, {useEffect, useState} from "react";
import {Container, Row, Card, Col, Pagination, Image, Media, Button} from "react-bootstrap";
import axios from 'axios'
import Search from "./component/search";
import Results from "./component/results";
import Details from "./component/details";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = (props) => {
    // all const
    const [ liste, setListe ] = useState([]);
    const [item,setItem]=useState(null);
    const [ cvCandidat, setCvCandidat ]=useState([]);
    /*-------------------------------------------------------------*/
    const handleCvRequest = (item,value) =>{

        console.log(axios.get (`https://127.0.0.1:8000/api/sourcing?`+item +value));
        axios.get (`https://127.0.0.1:8000/api/sourcing?`+item +value)
            .then((result)=>{

                setListe(result.data);
            })
    }
    // Cv Candidat


    const handleCv = (cv)=>{
        console.log(cv +'requete id');
        console.log(axios.get(`https://127.0.0.1:8000/api/c_vs?metier.id=`+cv));
        axios.get(`https://127.0.0.1:8000/api/c_vs?id=`+cv)
            .then((result)=>{

                setCvCandidat(result.data[0]);

            })
    }

console.log(liste);
    return (
        <Container fluid style={ styleSearch}>
            <Row >
                <Col sm >
                    <Search
                        onDemandeCvChanged={ (item,value) => handleCvRequest(item,value) }

                    />
                </Col>

                <Col sm style={border}>
                    <Results liste={liste} onReceiveCv={(cv)=>handleCv(cv)}/>
                </Col>

                <Col xs style={border}>
                    <Details cv={cvCandidat}/>
                </Col>

            </Row>
        </Container>
    );
}

const styleSearch={


    minHeight:"90vh",


}

const border={


    minHeight:"90vh",


}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react_sourcing')
);


