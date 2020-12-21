import React, {useState} from "react";
import {Container, Row, Col, Card, Image} from "react-bootstrap";
import {  Document, Page, pdfjs } from 'react-pdf'
import cvTemplate from "./cvTemplate";
import Templates from "./Templates";
import image from "../avatar.png";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


function TEST (props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
console.log(props.cv);
if (props.cv.length !== 0)
    return(
        <Container fluid>
            <Row style={{marginLeft:'0',marginRight:'0',paddingTop:'10px'}}>
                <Col>
                    {props.cv.map(cv => (
            <Card style={styleSearch} >
                <Card.Body  >
                    <Card.Title>{cv.candidat.nom}</Card.Title><Image style={{float: 'right',width:'15%'}} src={image} roundedCircle />
                    <Card.Subtitle className="mb-2 text-muted">{cv.candidat.prenom}</Card.Subtitle>
                    <Card.Text>
                        Adresse :{cv.candidat.adresse}
                        <br/>
                        Numero de Telephone : {cv.candidat.telephone}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>

            </Card>
                    ))}
                </Col>




            </Row>
            <Row>

                    <div>
                        <div className="row">
                            <div className="col-6 no-print">
                                {/* <Dialog /> */}
                            </div>

                            <div  className="col-sm-12 paper-container">
                                <Templates />
                                <div className="paper">


                                    <section className="identite">
                                        {props.cv.map(cv => (
                                        <div className="nom">{cv.candidat.prenom} {cv.candidat.nom}</div>
                                        ))}
                                    </section>
                                    <section className="photo">
                                        {props.cv.map(cv => (
                                        <div className="portrait"><img src={'null'}/></div>
                                        ))}
                                    </section>
                                    <section className="profil">

                                        <header>Contact</header>
                                        {props.cv.map(cv => (
                                        <div className="adresse">{cv.candidat.adresse}</div>
                                        ))}
                                        {props.cv.map(cv => (
                                        <div className="ville">{cv.candidat.ville}</div>
                                        ))}
                                        {props.cv.map(cv => (
                                        <div className="phone">{cv.candidat.phone}</div>
                                        ))}
                                        {props.cv.map(cv => (
                                        <div className="email">{cv.candidat.email}</div>
                                            ))}
                                    </section>
                                    <section className="titre">
                                        <div className="poste">{'null'}</div>
                                    </section>
                                    <section className="intro">
                                        <header>Profil</header>
                                        <div className="text">{'null'}</div>
                                    </section>

                                    {/*
                                    <section className="experiences">
                                        <header>Experiences</header>
                                        <div >
                                            {
                                                this.state.experiences.map((experience, index) =>
                                                    <div className="experience"  key={index}>
                                                        <div className="date-debut">{experience.dateDebut}</div>
                                                        <div className="date-fin">{experience.dateFin}</div>
                                                        <div className="entreprise">{experience.entreprise}</div>
                                                        <div className="ville">{experience.ville}</div>
                                                        <div className="logo">{experience.logo}</div>
                                                        <div className="titre">{experience.titre}</div>
                                                        <div className="desciption">{experience.description}</div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </section>
                                    */}
                                    <section className="formations">
                                        <header>Formations</header>
                                        <div >
                                            {
                                                props.cv.map((cv, index) =>
                                                    <div className="formation"  key={index}>
                                                        <div className="date-debut">{cv.formations.dateDebut}</div>
                                                        <div className="date-fin">{cv.formations.dateFin}</div>
                                                        <div className="ecole">{cv.formations.ecole}</div>
                                                        <div className="titre">{cv.formations.diplome}</div>
                                                        <div className="niveau">{cv.formations.niveau}</div>
                                                        <div className="desciption">{cv.formations.description}</div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </section>
                                    <section className="competences">
                                        <header>Competences</header>
                                        <div >
                                            {
                                                props.cv.map((competences, index) =>
                                                    <div className="competence"  key={index}>
                                                        <div className="libelle">{competences.libelle}</div>
                                                        <div className={"niveau niveau-" + competences.niveau}>{competences.niveau}</div>
                                                        <meter max="5" value={competences.niveau}></meter>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </section>
                                    <section className="langues">
                                        <header>Langues</header>
                                        <div >
                                            {
                                                props.cv.map((langue, index) =>
                                                    <div className="langue"  key={index}>
                                                        <div className="libelle">{langue.libelle}</div>
                                                        <div className="niveau">{langue.niveau}</div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </section>
                                    {/*
                                    <section className="reseaux">
                                        <header>Réseaux</header>
                                        <div >
                                            {
                                                this.state.reseaux.map((reseau, index) =>
                                                    <div className="reseau"  key={index}>
                                                        <div className="libelle no-screen">{reseau.type}</div>
                                                        <div className="libelle no-screen">{reseau.url}</div>
                                                        <div className="niveau no-print">
                                                            <a href="{reseau.url}">{reseau.type}</a>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </section>
                                    */}
                                </div>
                            </div>

                        </div>

                    </div>

            </Row>
        </Container>

    )
else if (props.cv.length === 0) {
    return (
        <div> </div>
    )
}
}
export default TEST;
const styleSearch={

    //border:'2px solid #000000',
    width: '38rem',
    marginTop:'10px',
    boxShadow: "1px 1px 1px #9E9E9E",
    backgroundColor:'white',
    opacity:'0.9',

}