import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Pagination} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Search from "./component/search";
import axios from 'axios'
import Results from "./component/results";
import CV from "./component/cvTemplate";
import TEST from "./component/cv";


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
        axios.get(`https://127.0.0.1:8000/api/c_vs?limit=4`)
            .then((result)=>{
                setListeAll(result.data);
                setListe([]);
            })
    }

    // Liste par mutli critere

    const[regionListe,setRegionlist]=useState([]);
    const[departementListe,setDepartementlist]=useState([]);
    const[villesListe,setVilleListe]=useState([]);
    const handleMulti = (multi)=>{
        axios.get(`https://127.0.0.1:8000/api/c_vs?candidat.ville=`+multi)
            .then((result)=>{
                setVilleListe(result.data);
                setListe([]);
                setListeAll([]);
            })
    }
    // Cv Candidat

    const [cvCandidat,setCvCandidat]=useState([]);
    const handleCv = (cv)=>{
        axios.get(`https://127.0.0.1:8000/api/candidats/`+cv)
            .then((result)=>{
                setCvCandidat(result.data);

            })
    }





  return (
      <Container fluid style={ styleSearch}>
        <Row>
          <Col>
              <Search onIdRecruteurChanged={ (ti) => handleIdRecruteurChanged(ti) } onRequestAllCv={handleAllCvRequest} onSearchMulti={(mutli)=>handleMulti(mutli)}/>
          </Col>
          <Col xs={6}>
                <Results liste={liste} allCv={listAll} multi={villesListe} onReceiveCv={(cv)=>handleCv(cv)}/>
          </Col>
          <Col>
                <TEST cv={cvCandidat}/>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
const styleSearch={

    backgroundColor:'#61dafb',
    minHeight:"90vh"

}