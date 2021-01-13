import {ButtonGroup, Col, Container, Form, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import AsyncSelect from 'react-select/async';
import {useEffect, useState} from "react";
import axios from 'axios'
import {Range} from "react-range";



function Search(props) {

    // All constant useState
    const [valueMetier, setValueMetier] = useState([]);
    const [valueVille, setValueVille] = useState('');
    const [keyWord, setKeyWord] = useState('');
    const [recruteur, setRecruteur] = useState('6');
    const [statusAll, setStatusALL] = useState(false);
    const [statusRecruteur, setStatusRecruteur] = useState(false);
    const [checked, setChecked] = useState('info');
    const [range, setRange] = useState([1]);
    const [finalRange, setFinalRange] = useState([1]);
    const [disabled,setDisabled]=useState(true);



    // Recherche Api
    const loadOptionMetier = (valueMetier, callback) => {
        console.log(axios.get("https://127.0.0.1:8000/api/metiers?libelle=" + valueMetier))
        axios.get("https://127.0.0.1:8000/api/metiers?libelle=" + valueMetier)
            .then((met) => {
                callback(met.data);
            });
    }
    const loadOtionVille = (value, callback) => {
        axios.get("https://127.0.0.1:8000/api/villes?nom=" + value)
            .then((vil) => {
                callback(vil.data);
            });
    }


    // Si la valeur change on modifie.
    const handleChangeMetier = value => {
        setValueMetier(value);

    }
    const changeParam = () => {
        let params = [];
            if (keyWord) {
                params.push('keyword=' + keyWord);
            }
            if (statusRecruteur) {
                params.push('recruteur=6');
            }
            if (valueVille){
                params.push('ville='+valueVille);
                params.push('rayon='+range);
            }

            props.onDemandeCvChanged(params.join("&"));
    }
    const handleClickAll = (e) => {
        setStatusRecruteur(false);
        changeParam();
    }
    const handleClickRecruteur = (e) => {
            setStatusRecruteur(true);
            changeParam();
        }

    useEffect(() => {
        changeParam();
    }, [keyWord, valueVille, finalRange])


    return (
        <Container style={styleSearch}>
            <Row style={{marginLeft: '0', marginRight: '0', paddingTop: '10px'}}>
                <Col>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton
                        type="checkbox"
                        variant='info'
                        value={2}
                        //onChange={}
                        onClick={handleClickRecruteur}
                    >
                        Ma Cvthèque
                    </ToggleButton>

                        &emsp;

                    <ToggleButton
                        type="radio"
                        variant="info"
                        value={1}
                        onChange={handleClickAll}
                        onClick={event => {setStatusRecruteur(false)}}
                    >
                        Candidathèque
                    </ToggleButton>
                </ToggleButtonGroup>
                                    </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Mot clé</Form.Label>
                        <Form.Control
                            placeholder="Metier, Competence ..."
                            onChange={e=>{setKeyWord(e.target.value)}}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formGridState">
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
                    <Form.Group controlId="formGridState">
                        <Form.Label>Ville</Form.Label>
                        <AsyncSelect
                            className="mb-2"
                            loadOptions={loadOtionVille}
                            getOptionLabel={vil => vil.nom}
                            isClearable={true}
                            //getOptionLabel={ (met) => { return met.nom } }
                            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                            placeholder="Saisissez la ville.."
                            onChange={value=>{setValueVille(value.id);setDisabled(false)}}
                            //onInputChange={changeParam}
                        />
                    </Form.Group>
                    <Range
                        step={0.1}
                        min={1}
                        max={150}
                        values={range}
                        disabled={disabled}
                        onChange={values => setRange(values)}
                        onFinalChange={values => setFinalRange(values)}
                        renderTrack={({props, children}) => (
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
                        renderThumb={({props}) => (
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
                    <output style={{marginTop: "30px" }} id="output">
                        Distance sélectionner {range-1} Km
                    </output>
                </Col>
            </Row>
        </Container>
    )
};
const styleSearch = {

    //border:'2px solid #000000',
    backgroundColor: 'white',
    opacity: '0.9',
    marginTop: '10px',
    boxShadow: "10px 10px 1px #9E9E9E",
    minHeight: '90vh',
    maxWidth: '395px',


}
export default Search;
