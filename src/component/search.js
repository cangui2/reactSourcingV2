import  {Container,Button,Row,Col,Form} from "react-bootstrap";
import AsyncSelect from 'react-select/async';
import {useCallback, useState} from "react";
import axios from 'axios'


function Search (props){

    // All constant useState
    const [selectValueRegion, setValueRegion]=useState(null);
    const [selectValueDepartement,setValueDepartement]=useState(null);
    const [selectValueVille,setValueVille]=useState(null);
    const [placeholderDepartement,setPlaceholderDepartement]=useState('select')
    const [placeholderRegions,setPlaceholderRegions]=useState('select')

    // Recherche Api

    const loadOptionRegion =(selectValueRegion,callback)=>{
        axios.get("https://127.0.0.1:8000/api/regions?nom="+ selectValueRegion)
            .then((reg)=>{
                callback(reg.data);


            });
    }
    const loadOptionDepartement =(selectValueDepartement,callback)=>{
        axios.get("https://127.0.0.1:8000/api/departements?nom=" + selectValueDepartement)
            .then((dep)=>{
                callback(dep.data);

            });
    }
    const loadOtionVille =(selectValueVille,callback)=>{
        axios.get("https://127.0.0.1:8000/api/villes?nom="+selectValueVille)
            .then((vil)=>{

                callback(vil.data);

            });
    }


            // Si la valeur change on modifie.
    const  handleChangeRegion= value => {
        setValueRegion(value);

    }

    const handleChangeDepartement =value =>{
        setValueDepartement(value);
    }

    const handleChangeVille = value =>{

        setValueVille(value);
        props.onSearchMulti(value.nom);

    }

    const handleKeywordChange = value =>{

        //setValueVille(value);
        props.onKeywordChange(value);

    }





    return (
        <Container fluid style={styleSearch}>
            <Row style={{marginLeft:'0',marginRight:'0',paddingTop:'10px'}}>
                <Col >
                <Button variant="info"  onClick={()=>{props.onIdRecruteurChanged(6)}}>Ma Cvthèque</Button>{' '}
                </Col>
                <Col >
                    <Button variant="info"  onClick={()=>{props.onRequestAllCv()}} >Candidatheque</Button>{' '}
                </Col>
            </Row>
            <Row >
                <Col>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Mot clé</Form.Label>
                        <Form.Control
                            placeholder="Code rome, Competence, etc ..."
                            onChange={handleKeywordChange}
                        />
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
                            placeholder="Saisissez la region"
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
                            placeholder="Saisissez le departement"
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
    backgroundColor:'white',
    opacity:'0.9',
    marginTop:'10px',
    boxShadow: "10px 10px 1px #9E9E9E",
    minHeight:'90vh',
    maxWidth:'395px',
    position:'fixed'

}
export default Search;