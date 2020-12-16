import  {Container,Button,Row,Col,Form} from "react-bootstrap";
import AsyncSelect from 'react-select/async';
import {useCallback, useState} from "react";
import axios from 'axios'


function Search (props){

    // Recherche par mot clé

    // Recherche Region via axios

            // on parametre les entrées
    const [selectValueRegion, setValueRegion]=useState(null);
            // on fais une fonction pour recup les données
    const loadOptionRegion =(selectValueRegion,callback)=>{
        axios.get("https://127.0.0.1:8000/api/regions?nom="+ selectValueRegion)
            .then((reg)=>{
                callback(reg.data);


            });
    }
            // Si la valeur change on modifie.
    const  handleChangeRegion= value =>{
        setValueRegion(value);

    }

    // Recherche Departement

    const [selectValueDepartement,setValueDepartement]=useState(null);
    const loadOptionDepartement =(selectValueDepartement,callback)=>{
        axios.get("https://127.0.0.1:8000/api/departements?nom=" + selectValueDepartement)
            .then((dep)=>{
                callback(dep.data);

            });
    }
    const handleChangeDepartement =value =>{
        setValueDepartement(value);
    }
    // Recherche villes

    const [selectValueVille,setValueVille]=useState(null);
    const loadOtionVille =(selectValueVille,callback)=>{
        axios.get("https://127.0.0.1:8000/api/villes?nom="+selectValueVille)
            .then((vil)=>{
                callback(vil.data);
            });
    }
    const [placeholderDepartement,setPlaceholderDepartement]=useState('select')
    const [placeholderRegions,setPlaceholderRegions]=useState('select')
    const handleChangeVille = value =>{
        setValueRegion(value.departement.region.nom);
        setValueDepartement(value.departement.nom);
        setPlaceholderDepartement(value.departement.nom);
        setPlaceholderRegions(value.departement.region.nom);
        props.onSearchMulti(value.id);
        console.log(value);
    }





    return (
        <Container fluid style={styleSearch}>
            <Row>
                <Col >
                <Button variant="info"  onClick={()=>{props.onIdRecruteurChanged(6)}}>Ma Cvthèque</Button>{' '}
                </Col>
                <Col >
                    <Button variant="info"  onClick={()=>{props.onRequestAllCv()}} >Cv Candidatheque</Button>{' '}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Mot clé</Form.Label>
                        <Form.Control placeholder="Code rome, Competence, etc ..."/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group  controlId="formGridState">
                        <Form.Label>Regions</Form.Label>
                        <AsyncSelect
                            className="mb-2"
                            loadOptions={loadOptionRegion}
                            getOptionLabel={reg => reg.nom}
                            //getOptionLabel={ (met) => { return met.nom } }
                            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                            placeholder={placeholderDepartement}
                            onChange={handleChangeRegion}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group  controlId="formGridState">
                        <Form.Label>Departement</Form.Label>
                        <AsyncSelect
                            className="mb-2"
                            loadOptions={loadOptionDepartement}
                            getOptionLabel={dep => dep.nom}
                            //getOptionLabel={ (met) => { return met.nom } }
                            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                            placeholder={placeholderRegions}
                            onChange={handleChangeDepartement}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group  controlId="formGridState">
                        <Form.Label>Ville</Form.Label>
                        <AsyncSelect
                            className="mb-2"
                            loadOptions={loadOtionVille}
                            getOptionLabel={vil => vil.nom}
                            //getOptionLabel={ (met) => { return met.nom } }
                            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                            placeholder="Saisissez la ville.."
                            onChange={handleChangeVille}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )
};
const styleSearch={

    //border:'2px solid #000000',
    marginTop:'10px',
    boxShadow: "5px 10px 1px #9E9E9E",
    minHeight:'90vh'
}
export default Search;