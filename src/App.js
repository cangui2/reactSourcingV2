import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Card, Col, Pagination, Image, Media, Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Search from "./component/search";
import axios from 'axios'
import Results from "./component/results";
import Details from "./component/details";



function App(props) {
    // all const
    const [ liste, setListe ] = useState([]);
    const [ cvCandidat, setCvCandidat ]=useState([]);
    const[listAll,setListeAll]=useState([]);
    const[regionListe,setRegionlist]=useState([]);
    const[departementListe,setDepartementlist]=useState([]);
    const[villesListe,setVilleListe]=useState([]);
    const [metierListe,setMetierListe]=useState([]);
    const [competenceListe,setCompetenceListe]=useState([]);

    //  Recherche via Api

        // Par id recruteur
    const handleIdRecruteurChanged = (ti) => {
        //setItems(ti);
        axios.get(`https://127.0.0.1:8000/api/c_vs?deposePar.id=` + ti)
            .then(
                (result) => {

                    setListe(result.data);
                    setListeAll([]);
                    setCvCandidat([]);
                }
            );

    }
    // Liste cv diponible sur candidatheque


    const handleAllCvRequest = (cv)=>{
        axios.get(`https://127.0.0.1:8000/api/c_vs?limit=4`)
            .then((result)=>{
                setListeAll(result.data);
                setListe([]);
                setCvCandidat([]);
            })
    }

    // Liste par mutli critere


    const handleMulti = (multi)=>{
        axios.get(`https://127.0.0.1:8000/api/c_vs?candidat.ville=`+multi)
            .then((result)=>{
                setVilleListe(result.data);
                setListe([]);
                setListeAll([]);
            })
    }

    // Cv Candidat


    const handleCv = (cv)=>{
        axios.get(`https://127.0.0.1:8000/api/c_vs?candidat.id=`+cv)
            .then((result)=>{
                console.log(result.data[0]);
                setCvCandidat(result.data[0]);

            })
    }
    const handlMotCle =(value)=>{
        if (Number.isInteger(value)){
            axios.get(`https://127.0.0.1:8000/api/metiers?rome.id=`+value)
                .then((result)=>{
                    console.log(result.data[0]);
                    setCvCandidat(result.data[0]);

                })
        }
        else {
            axios.get(`https://127.0.0.1:8000/api/metiers?libelle=`+value)
                .then((result)=>{
                    console.log(result.data[0]);
                    setCvCandidat(result.data[0]);

                })
        }


    }

console.log(listAll);


  return (
      <Container fluid style={ styleSearch}>
        <Row >
          <Col sm >
              <Search onIdRecruteurChanged={ (ti) => handleIdRecruteurChanged(ti) } onRequestAllCv={handleAllCvRequest} onSearchMulti={(mutli)=>handleMulti(mutli)}/>
          </Col>
          <Col sm style={border}>
                <Results liste={liste} allCv={listAll} multi={villesListe} onReceiveCv={(cv)=>handleCv(cv)}/>
          </Col>
          <Col xs style={border}>
              <Details cv={cvCandidat}/>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
const border={


}
const styleSearch={


    minHeight:"90vh",


}
