import React from "react";
import about_me_img from "../Image/Developer activity-bro.svg";
import personal_info_data from "./assets/AboutIn";
import "./About.css";
function About() {
  return (
    <section className="about_me" id="about_myself">
      <div className="container_01">
        <div className="my_img">
          <img id="img" src={about_me_img} alt="profile_image" />
        </div>
        <div className="my_info">
          <h2>
            À propos de <span>moi</span>
          </h2>
          <p>
           En tant que développeur full stack diplômé d'un bachelor en ingénierie informatique de l'Ukraine, 
           ma passion de longue date pour la technologie et mon enthousiasme pour l'apprentissage continu ont façonné 
           mon parcours académique et ma quête d'expérience professionnelle. Malgré un niveau d'expérience relativement 
           limité, je suis animé par une motivation inébranlable et une audace à toute épreuve. Mon parcours académique 
           solide a jeté les bases nécessaires, tandis que ma volonté constante d'explorer de nouvelles choses m'a conduit 
           à utiliser plusieurs langages et technologies. Je m'efforce régulièrement de tester de nouveaux frameworks et 
           technologies pour élargir mes connaissances et renforcer mon arsenal d'outils. 
          </p>
          <div className="personal_info">
            {personal_info_data.map((data, index) => {
              return (
                <>
                  <div className="abc" key={index}>
                    {data.section_one.map((e, index) => {
                      return (
                        <h4 key={index}>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                  <div className="xyz">
                    {data.section_two.map((e, index) => {
                      return (
                        <h4>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
