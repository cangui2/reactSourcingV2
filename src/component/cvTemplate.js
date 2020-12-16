import React from 'react';
import { Button } from 'react-bootstrap';


import './CV.css';

class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profil: {
                nom: "Caumartin",
                prenom: "François-Régis",
                adresse: "Carnaby Street",
                ville: "London",
                phone: "+33 6 58 96 52 14",
                email: "jodo@yahoo.com",
                titre: "Développeur Web",
                description: "Après une thèse de biochimie et un post-doc en chimiométrie pendant lesquels j'avais développé un certain nombre d'outils informatiques...",
                photo: "http://test.candidatheque.com/assets/photos/profil4.png",
                metier: {}
            },
            experiences: [
                {
                    dateDebut: "2018",
                    dateFin: "maintenant",
                    titre: "Lead developer",
                    entreprise: "TheBox",
                    logo:"http://test.candidatheque.com/assets/photos/logo1.png",
                    desciption: ""
                },
                {
                    dateDebut: "2012",
                    dateFin: "2018",
                    titre: "stage de découverte",
                    entreprise: "TheBox",
                    logo:"http://test.candidatheque.com/assets/photos/logo2.png",
                    desciption: ""
                },
                {
                    dateDebut: "2005",
                    dateFin: "2012",
                    titre: "stage de découverte",
                    entreprise: "TheBox",
                    logo:"http://test.candidatheque.com/assets/photos/logo3.png",
                    desciption: ""
                }
            ],
            formations: [
                {
                    dateDebut: "2003",
                    dateFin: "2004",
                    ecole: "BTS - Chimie des particules",
                    niveau: "3",
                    diplome: "",
                    description: "La raison que je donnais maintenant dans mes lettres à Gilberte, de mon refus de la voir, c'était une allusion à quelque mystérieux malentendu, parfaitement fictif, qu'il y aurait eu entre elle et moi."

                },
                {
                    dateDebut: "2004",
                    dateFin: "2005",
                    ecole: "Ecole de le dernière chance",
                    niveau: "2",
                    diplome: "Master Communication",
                    description: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions."

                }
            ],
            competences: [
                { libelle: "Javascript", niveau: "5" },
                { libelle: "PHP", niveau: "2" },
                { libelle: "Symfony", niveau: "1" },
                { libelle: "React", niveau: "3" },
            ],
            langues: [
                { libelle: "Anglais", niveau: "5" },
                { libelle: "Allemand", niveau: "2" }
            ],
            reseaux: [
                { type: "LinkedIn", url: "https://linkedin.com/..." },
                { type: "GitHub", url: "https://github.com/..." }
            ],
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-6 no-print">
                    {/* <Dialog /> */}
                </div>

                <div  className="col-sm-12 paper-container">

                    <div className="paper">
                        <section className="identite">
                            <div className="nom">{this.state.profil.prenom} {this.state.profil.nom}</div>
                        </section>
                        <section className="photo">
                            <div className="portrait"><img src={this.state.profil.photo}/></div>
                        </section>
                        <section className="profil">
                            <header>Contact</header>
                            <div className="adresse">{this.state.profil.adresse}</div>
                            <div className="ville">{this.state.profil.ville}</div>
                            <div className="phone">{this.state.profil.phone}</div>
                            <div className="email">{this.state.profil.email}</div>
                        </section>
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
                                    this.state.formations.map((formation, index) =>
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
                    </div>
                </div>

            </div>
        );
    }
}

export default CV;