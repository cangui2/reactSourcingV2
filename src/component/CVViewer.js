import React from 'react';
import { Button } from 'react-bootstrap';
import avatar from '../avatar.png'

import './CV.css';


const CVViewer = (props) => {


        return (






                    <div className="paper"style={paperStyle}>
                        <link rel="stylesheet" href="/template3-7.css"/>
                        <section className="identite">
                                <div className="nom">{props.cv.candidat.prenom} {props.cv.candidat.nom}</div>
                            <section className="photo">
                                <div className="portrait"><img src={avatar} style={{width:'15%',paddingTop:'32px',paddingLeft:'3px'}}/></div>
                            </section>
                            </section>



                        <section className="profil">

                            <header>Contact</header>

                            <div className="adresse">{props.cv.candidat.adresse}</div>
                            <div className="ville">{props.cv.candidat.ville}</div>
                            <div className="phone">{props.cv.candidat.telephone}</div>
                            <div className="email">{props.cv.candidat.email}</div>

                        </section>


                        <section className="titre">

                            <div className="poste">{props.cv.metier.libelle}</div>

                        </section>

                        <section className="intro">
                            <header>Profil</header>

                            <div className="text">{props.cv.titre}</div>

                        </section>

                        <section className="experiences">
                            <header>Experiences</header>
                            <div >
                                {props.cv.experiences.map(experience => (
                                        <div className="experience"  >
                                            <div className="date-debut">{experience.dateDebut}</div>
                                            <div className="date-fin">{experience.dateFin}</div>
                                            <div className="entreprise">{experience.entreprise}</div>
                                            <div className="ville">{experience.ville}</div>
                                            <div className="logo">{experience.logo}</div>
                                            <div className="titre">{experience.titre}</div>
                                            <div className="desciption">{experience.description}</div>
                                        </div>
                                    ))}
                            </div>
                        </section>

                        <section className="formations">
                            <header>Formations</header>
                            <div >
                                {props.cv.formations.map(formations => (
                                        <div className="formation"  >
                                            <div className="date-debut">{formations.dateDebut}</div>
                                            <div className="date-fin">{formations.dateFin}</div>
                                            <div className="ecole">{formations.ecole}</div>
                                            <div className="titre">{formations.diplome}</div>
                                            <div className="niveau">{formations.niveau}</div>
                                            <div className="desciption">{formations.description}</div>
                                        </div>
                                ))}
                            </div>
                        </section>

                        <section className="competences">
                            <header>Competences</header>
                            <div >
                                {
                                    props.cv.competences.map((competence, index) =>
                                        <div className="competence"  key={index}>
                                            <div className="libelle">{competence.libelle}</div>
                                            <div className={"niveau niveau-" + competence.niveau}>{competence.niveau}</div>
                                            <meter max="5" value={competence.niveau}></meter>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="langues">
                            <header>Langues</header>
                            <div >
                                {
                                    props.cv.langues.map((langue, index) =>
                                        <div className="langue"  key={index}>
                                            <div className="libelle">{langue.libelle}</div>
                                            <div className="niveau">{langue.niveau}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="reseaux">
                            <header>Réseaux</header>
                            <div >
                                {
                                    props.cv.reseaux.map((reseau, index) =>
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

                    </div>



        );

}

export default CVViewer;

const paperStyle ={
    //width:'50vw',
    height:'50vh',
   // marginLeft:'-150px',
    marginTop:'-100px',
   // marginRight:'-120px'
}