import React from "react";
import proj_img from "../../Image/Code typing-bro.svg";
import "./ProjHome.css";
function ProjHome() {
  return (
    <>
      <div className="proj_containar_section">
        <div className="proj_left">
          <h3>Projets et expériences</h3>
          <p>
            Malgré une expérience professionnelle limitée en termes de nombre de
            projets, chaque expérience a été enrichissante et a contribué
            significativement à mon développement. Ces engagements m'ont permis
            d'acquérir des compétences techniques avancées dans l'utilisation
            des nouvelles technologies, ainsi que des compétences générales
            telles que la gestion du temps et le travail en équipe. Chaque
            projet a été l'occasion d'apprendre et de perfectionner mes
            aptitudes, renforçant ainsi ma valeur en tant que professionnel.
          </p>
        </div>
        <div className="proj_right">
          <img src={proj_img} alt="Project Img" />
        </div>
      </div>
    </>
  );
}

export default ProjHome;
