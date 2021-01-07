import {Container, Row, Col, Form, ToggleButton, Popover} from "react-bootstrap";
import AsyncSelect from 'react-select/async';
import { useState} from "react";
import axios from 'axios'
import {Range} from "react-range";


function Search (props){

    // All constant useState
    const [valueMetier, setMetier]=useState([]);
    const [valueVille,setValueVille]=useState('');
    const [keyWord,setKeyWord]=useState('');
    const [recruteur,setRecruteur]=useState('6');
    const [statusAll, setStatusALL]=useState(false);
    const [statusRecruteur, setStatusRecruteur]=useState(false);
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [range,setRange]=useState([0]);


    // Recherche Api
    const loadOptionMetier =(valueMetier,callback)=>{
        console.log(axios.get("https://127.0.0.1:8000/api/metiers?libelle="+ valueMetier))
        axios.get("https://127.0.0.1:8000/api/metiers?libelle="+ valueMetier)
            .then((met)=>{
                callback(met.data);
                console.log(met.data);

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
    const  handleChangeMetier= value => {
        setMetier(value);

    }

    const handleChangeVille = value =>{
        if (!value && statusRecruteur === true){
            setValueVille('')
            props.onDemandeCvChanged('keyword='+keyWord+'&ville='+''+'&recruteur='+recruteur);
        }
        if (!value && statusAll === true){
            props.onDemandeCvChanged('keyword='+keyWord+'&ville='+'');
        }
        if(!value){

        }
        else {
        setValueVille(value.nom);
        fVille(value.nom);

        }

    }
    const fVille =(ville) =>{
        if (statusRecruteur === true){

            props.onDemandeCvChanged('keyword='+keyWord+'&ville='+ville+'&recruteur='+recruteur);
        }
        if(statusAll === true ){
            props.onDemandeCvChanged('keyword='+keyWord+'&ville='+ville);
        }
        console.log(ville);
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
                        <Form.Label>Metier</Form.Label>
                        <AsyncSelect
                            className="mb-2"
                            loadOptions={loadOptionMetier}
                            getOptionLabel={met => met.libelle}
                            //getOptionLabel={ (met) => { return met.nom } }
                            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                            placeholder="Saisissez le metier"
                            onChange={handleChangeMetier}
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
                            isClearable={true}
                            //getOptionLabel={ (met) => { return met.nom } }
                            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                            placeholder="Saisissez la ville.."
                            onChange={handleChangeVille}

                        />
                    </Form.Group>
                    <Range
                        step={0.1}
                        min={0}
                        max={150}
                        values={range}

                        onChange={(values) => setRange(values)}
                        onFinalChange={(values => setRange(values))}
                        renderTrack={({ props, children }) => (
                            <div
                                {...props}

                                style={{
                                    ...props.style,
                                    height: '6px',
                                    width: '100%',
                                    backgroundColor: '#ccc'
                                }}
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({ props }) => (
                            <div

                                {...props}

                                style={{
                                    ...props.style,

                                    height: '22px',
                                    width: '22px',
                                    backgroundColor: '#999'
                                }}
                            />

                        )}
                    />
                    <output style={{ marginTop: "30px" }} id="output">
                       Distance sélectionner {range} Km
                    </output>
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
