import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Search from "./component/search";
import axios from 'axios'
import Results from "./component/results";

function App(props) {
    //  Liste cv deposer par le recruteur.
    const [ liste, setListe ] = useState([]);
    const handleIdRecruteurChanged = (ti) => {
        //setItems(ti);
        axios.get(`https://127.0.0.1:8000/api/c_vs?deposePar.id=` + ti)
            .then(
                (result) => {

                    setListe(result.data);
                    setListeAll([]);
                }
            );

    }
    // Liste cv diponible sur candidatheque
    const[listAll,setListeAll]=useState([]);
    const handleAllCvRequest = (cv)=>{
        axios.get(`https://127.0.0.1:8000/api/c_vs`)
            .then((result)=>{
                setListeAll(result.data);
                setListe([]);
            })
    }
console.log(listAll);



console.log(liste);

console.log(liste+'app')
  return (
      <Container fluid >
        <Row>
          <Col>
              <Search onIdRecruteurChanged={ (ti) => handleIdRecruteurChanged(ti) } onRequestAllCv={handleAllCvRequest}/>
          </Col>
          <Col xs={6}>
          <Results liste={liste} allCv={listAll}/>
          </Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
  );
}

export default App;
