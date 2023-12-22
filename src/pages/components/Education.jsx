import React from "react";
import "./Education.css";
import DIIT_img from "../../Image/DIIT.jpg";
import DIIT_logo from "../../Image/DIIT_logo.png";
import UCF_img from "../../Image/UCF.jpg";
import UCF_logo from "../../Image/UCF_logo.png";

function Education() {
  return (
    <>
      <div className="educ_container">
        <div className="educ_div_section">
          <div className="educ_upper_section">
            <div className="educ_container_one">
              <img src={DIIT_img} alt="educ_image" />
            </div>
            <div className="educ_container_two">
              <div className="upper_container_section">
                <div className="upper_left">
                  <img src={DIIT_logo} alt="DIIT logo" />
                </div>
                <div className="upper_middle">
                  <h3>
                    Université d'État ukrainienne des sciences et technologies
                  </h3>
                  <div className="upper_right">
                    <h4>Bachelor en ingénierie informatique</h4>
                    <h5 style={{ color: "green" }}>2019-2023</h5>
                  </div>
                </div>
              </div>
              <div className="educ_lower_section">
                <div className="educ_data_info">
                  <p>
                    Au cours de cette période, j'ai acquis une solide base de
                    connaissances en PASCAL, C, C++, PHP, LARAVEL, et BOOTSTRAP.
                    Mon programme d'études comprenait la conception de circuits
                    électroniques, la gestion de bases de données, ainsi que des
                    modules portant sur les réseaux, les systèmes
                    d'exploitation, et l'électronique informatique. En
                    parallèle, j'ai développé des compétences en logique
                    informatique, en mathématiques, en physique, ainsi qu'en
                    langues russe et ukrainienne. Cette expérience académique a
                    renforcé ma compréhension holistique de l'informatique, me
                    dotant d'une expertise polyvalente dans divers domaines
                    technologiques.
                  </p>
                </div>
                <div className="educ_btn">
                  <a href={"https://ust.edu.ua/"}>
                    <button>Visiter le site</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="educ_div_section">
          <div className="educ_upper_section">
            <div className="educ_container_one">
              <img src={UCF_img} alt="educ_image" />
            </div>
            <div className="educ_container_two">
              <div className="upper_container_section">
                <div className="upper_left">
                  <img src={UCF_logo} alt="DIIT logo" />
                </div>
                <div className="upper_middle">
                  <h3>University of Customs and Finance</h3>
                  <div className="upper_right">
                    <h4>Année préparatoire</h4>
                    <h5 style={{ color: "green" }}>2018 - 2019</h5>
                  </div>
                </div>
              </div>
              <div className="educ_lower_section">
                <div className="educ_data_info">
                  <p>
                    Au cours de l'année académique, j'ai étudié des matières
                    essentielles telles que les mathématiques et la physique,
                    renforçant ainsi mes bases académiques. Mon programme
                    comprenait également une introduction à l'informatique,
                    élargissant ma compréhension des principes fondamentaux de
                    ce domaine. Parallèlement, j'ai perfectionné mes compétences
                    linguistiques en russe et en ukrainien. Cette période
                    d'études a été une étape importante dans mon parcours
                    éducatif, contribuant à ma formation académique globale.
                  </p>
                </div>
                <div className="educ_btn">
                  <a href={"http://umsf.dp.ua/"}>
                    <button>Visiter le site</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
