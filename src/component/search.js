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
    const [range,setRange]=useState([1]);



    // Recherche Api
    const loadOptionMetier =(valueMetier,callback)=>{
        console.log(axios.get("https://127.0.0.1:8000/api/metiers?libelle="+ valueMetier))
        axios.get("https://127.0.0.1:8000/api/metiers?libelle="+ valueMetier)
            .then((met)=>{
                callback(met.data);


            });
    }
    const loadOtionVille =(value,callback)=>{
        axios.get("https://127.0.0.1:8000/api/villes?nom="+value)
            .then((vil)=>{
                callback(vil.data);


            });
    }


            // Si la valeur change on modifie.
    const  handleChangeMetier= value => {
        setMetier(value);

    }

    const handleChangeVille = value =>{
        setValueVille(value.id);
        if (statusRecruteur === true){

            props.onDemandeCvChanged('keyword='+keyWord+'&ville='+value.id+'&recruteur='+recruteur+'&rayon='+range);
            setValueVille(value.id);
            console.log('keyword='+keyWord+'&ville='+value.id+'&recruteur='+recruteur+'&rayon='+range);
        }
        if (statusAll === true){


            props.onDemandeCvChanged('keyword='+keyWord+'&ville='+value.id+'&rayon='+range);
            setValueVille(value.id);
            console.log('la');
        }




    }

    // const handleKeywordChange = (e) =>{
    //     setKeyWord(e.target.value);
    //     console.log(keyWord);
    //     kChange(e.target.value);
    //
    //
    // }
    const kChange = (e)=>{
    setKeyWord(e.target.value)
        if(statusRecruteur === true){
            if(valueVille === ''){
                props.onDemandeCvChanged('keyword='+keyWord+'&ville='+valueVille+'&recruteur='+recruteur);
            }
            else {
            props.onDemandeCvChanged('keyword='+keyWord+'&ville='+valueVille+'&recruteur='+recruteur+'&rayon='+range);
            console.log(keyWord+'recruteur');
            }
        }
        if(statusAll === true){
            if(valueVille === '') {
                props.onDemandeCvChanged('keyword='+keyWord+'&ville='+valueVille);
            }
            else {
            console.log('all');
            props.onDemandeCvChanged('keyword='+keyWord+'&ville='+valueVille+'&rayon='+range);
            }
        }
    }
    const handleClickAll = (e)=>{

        setStatusALL(true);
        setStatusRecruteur(false);
        setChecked2(true);
        setChecked(false)


        if (range>1){

        props.onDemandeCvChanged('keyword='+keyWord+'&ville='+valueVille+'&rayon='+range);
        }
        else {
            props.onDemandeCvChanged('keyword='+keyWord+'&ville='+valueVille)
        }
    }
    const handleClickRecruteur =(e)=>{

        if(range>1){
            console.log('keyword='+keyWord+'&ville='+valueVille+'&recruteur='+recruteur+'&rayon='+range)
        props.onDemandeCvChanged('keyword='+keyWord+'&ville='+valueVille+'&recruteur='+recruteur+'&rayon='+range);
        }
        else {
            console.log('keyword='+keyWord+'&ville='+valueVille+'&recruteur='+recruteur);
            props.onDemandeCvChanged('keyword='+keyWord+'&ville='+valueVille+'&recruteur='+recruteur);
        }
        setStatusRecruteur(true);
        setChecked(true);
        setChecked2(false);
        setStatusALL(false);

        console.log(range+'click recruteur');

    }
    const handleRange = (value) =>{
        setRange(value);
        console.log(range+'range');
        if(statusRecruteur===true){
        props.onDemandeCvChanged('keyword'+keyWord+'&ville='+valueVille+'&recruteur='+recruteur+'&rayon='+value)
        }
        if(statusAll===true){
        props.onDemandeCvChanged('keyword'+keyWord+'&ville='+valueVille+'&rayon='+value)
        }

    }
console.log(keyWord);


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
                        Cv Candidathèque
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
                            onChange={kChange}

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
                            isClearable
                            //getOptionLabel={ (met) => { return met.nom } }
                            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                            placeholder="Saisissez la ville.."
                            onChange={handleChangeVille}

                        />
                    </Form.Group>
                    <Range
                        step={0.1}
                        min={1}
                        max={150}
                        values={range}
                        onChange={values => setRange(values)}
                        onFinalChange={handleRange}
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
