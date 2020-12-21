import React from 'react';
import { Button } from 'react-bootstrap';


import './CV.css';


const CVViewer = (props) => {


        return (
            <div className="row">
                <link rel="stylesheet" href="/template3-1.css"/>
                <div className="col-6 no-print">
                    {/* <Dialog /> */}
                </div>

                <div  className="col-sm-12 paper-container">

                    <div className="paper">
                        <section className="identite">
                            {props.cv.map(cv => (
                                <div className="nom">{cv.candidat.prenom} {cv.candidat.nom}</div>
                            ))}
                            </section>

                        <section className="photo">
                            {props.cv.map(cv => (
                            <div className="portrait"><img src={cv.candidat.photo}/></div>
                            ))}
                        </section>
                        {props.cv.map(cv => (
                        <section className="profil">

                            <header>Contact</header>

                            <div className="adresse">{cv.candidat.adresse}</div>
                            <div className="ville">{cv.candidat.ville.nom}</div>
                            <div className="phone">{cv.candidat.phone}</div>
                            <div className="email">{cv.candidat.email}</div>

                        </section>
                        ))}
                            {/*
                        <section className="titre">

                            <div className="poste">{this.state.profil.titre}</div>
                        </section>
                        <section className="intro">
                            <header>Profil</header>
                            <div className="text">{this.state.profil.description}</div>
                        </section>

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
                        <section className="formations">
                            <header>Formations</header>
                            <div >
                                {
                                    props.cv.formations.map((formation, index) =>
                                        <div className="formation"  key={index}>
                                            <div className="date-debut">{formation.dateDebut}</div>
                                            <div className="date-fin">{formation.dateFin}</div>
                                            <div className="ecole">{formation.ecole}</div>
                                            <div className="titre">{formation.diplome}</div>
                                            <div className="niveau">{formation.niveau}</div>
                                            <div className="desciption">{formation.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="competences">
                            <header>Competences</header>
                            <div >
                                {
                                    this.state.competences.map((competence, index) =>
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
                                    this.state.langues.map((langue, index) =>
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
        );

}

export default CVViewer;