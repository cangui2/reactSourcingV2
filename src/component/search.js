import {Container, Button, Row, Col, Form, ToggleButton} from "react-bootstrap";
import AsyncSelect from 'react-select/async';
import {useCallback, useState} from "react";
import axios from 'axios'


function Search (props){

    // All constant useState
    const [valueRegion, setValueRegion]=useState('');
    const [valueDepartement,setValueDepartement]=useState('');
    const [valueVille,setValueVille]=useState('');
    const [keyWord,setKeyWord]=useState('');
    const [recruteur,setRecruteur]=useState('6');
    const [statusAll, setStatusALL]=useState(false);
    const [statusRecruteur, setStatusRecruteur]=useState(false);
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);


    // Recherche Api
    const loadOptionRegion =(valueRegion,callback)=>{
        axios.get("https://127.0.0.1:8000/api/regions?nom="+ valueRegion)
            .then((reg)=>{
                callback(reg.data);


            });
    }
    const loadOptionDepartement =(valueDepartement,callback)=>{
        axios.get("https://127.0.0.1:8000/api/departements?nom=" + valueDepartement)
            .then((dep)=>{
                callback(dep.data);

            });
    }
    const loadOtionVille =(value,callback)=>{
        axios.get("https://127.0.0.1:8000/api/villes?nom="+value)
            .then((vil)=>{
                callback(vil.data);
                console.log(vil.data);

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
        setValueVille(value.nom);
        fVille(value.nom);

    }
    const fVille =(ville) =>{
        if (statusRecruteur === true){

            props.onDemandeCvChanged('keyword='+keyWord+'&ville='+ville+'&recruteur='+recruteur);
        }
        if(statusAll === true ){
            props.onDemandeCvChanged('keyword='+keyWord+'&ville='+ville);
        }
    }

    const handleKeywordChange = (e) =>{
        setKeyWord(e.target.value);
        kChange(e.target.value);


    }
    const kChange = (key)=>{
        if(statusRecruteur === true){
            props.onDemandeCvChanged('keyword='+key+'&ville='+valueVille+'&recruteur='+recruteur);
        }
        if(statusAll === true){

            props.onDemandeCvChanged('keyword='+key+'&ville='+valueVille);
        }
    }
    const handleClickAll = (e)=>{
        setStatusALL(true);
        setStatusRecruteur(false);
        setChecked2(true);
        setChecked(false);
        props.onDemandeCvChanged('keyword='+keyWord+'&ville='+valueVille);
    }
    const handleClickRecruteur =(e)=>{

        props.onDemandeCvChanged('keyword='+keyWord+'&ville='+valueVille+'&recruteur='+recruteur);
        setStatusRecruteur(true);
        setChecked(true);
        setChecked2(false);
        setStatusALL(false);
    }





    return (
        <Container  style={styleSearch}>
            <Row style={{marginLeft:'0',marginRight:'0',paddingTop:'10px'}}>
                <Col >
                    <ToggleButton
                        type="checkbox"
                        variant="info"
                        checked={checked}
                        value="1"
                        onChange={handleClickRecruteur}
                    >
                        Ma Cvthèque
                    </ToggleButton>
                    {/*
                <Button variant="info"  onClick={handleClickRecruteur}>Ma Cvthèque</Button>{' '}
                */}
                </Col>
                <Col >
                    <ToggleButton
                        type="checkbox"
                        variant="info"
                        checked={checked2}
                        value="1"
                        onChange={handleClickAll}
                    >
                        Ma Cvthèque
                    </ToggleButton>
                    {/*
                    <Button variant="info"  onClick={handleClickAll} >Candidatheque</Button>{' '}
                    */}
                </Col>
            </Row>
            <Row >
                <Col>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Mot clé</Form.Label>
                        <Form.Control
                            placeholder="Metier, Competence ..."
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


}
export default Search;
