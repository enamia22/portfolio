import React from "react";
import ProjHome from "./components/ProjHome";
import "./Project_exp.css";
import proj_data from "./assets/ProjectsData";
import simply from "../Image/simplycontact_cover.jpeg";
import ark from "../Image/ARK-X_LOGO.png";

const Project_exp = () => {
  return (
    <div>
      <div className="work_page" id="my-work">
        <div className="proj_component">
          <ProjHome />
        </div>
        <br />
        <br />
        <div className="project-container">
          <div className="project-section">
            <div className="project-upper-section">
              <div className="project-container-two">
                <div className="project-upper-container">
                  <div className="project-left">
                    <img src={simply} alt="project Images" />
                  </div>
                  <div className="project-middle">
                    <h3>Simply Contact</h3>
                    <div className="project-right">
                      <h4>Agent Back Office</h4>
                      <h5 style={{ color: "green" }}>
                        janvier 2020 / janvier 2021
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="project-lower-section">
                  <div className="project-data-info">
                    <p>
                      Dans mon rôle d'employé du back-office chez Simply
                      Contact, j'ai démontré ma maîtrise de Salesforce, du
                      support client, du traitement des réclamations et de la
                      résolution de problèmes en temps réel. En traitant les
                      réclamations téléphoniques des clients de Wizz Air, j'ai
                      assuré une résolution rapide et satisfaisante des
                      problèmes. De plus, j'ai géré les réclamations par
                      courrier électronique, traitant les annulations, les
                      remboursements, les compensations et les litiges avec
                      efficacité et clarté. Cette expérience a perfectionné mes
                      compétences en service client et en résolution de
                      problèmes.
                    </p>
                  </div>
                  <div className="project-btn">
                    <a href={"https://simplycontact.com/"}>
                      <button>Visiter le site</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project-section">
            <div className="project-upper-section">
              <div className="project-container-two">
                <div className="project-upper-container">
                  <div className="project-left">
                    <img src={ark} alt="project Images" />
                  </div>
                  <div className="project-middle">
                    <h3>Ark X Talent factory</h3>
                    <div className="project-right">
                      <h4>Développeur Full Stack MERN</h4>
                      <h5 style={{ color: "green" }}>
                        juillet 2023 / decembre 2023
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="project-lower-section">
                  <div className="project-data-info">
                    <p>
                      En tant que développeur Junior Full Stack MERN chez ARK-X,
                      je me suis activement engagé auprès de la communauté
                      ARK-X, connue sous le nom d'Arkadians, en dirigeant la
                      conception et le développement d'un site de discussion
                      dédié. Cette initiative a réussi à fournir à la communauté
                      une plate-forme interactive pour une communication et une
                      collaboration transparentes. Parmi mes réalisations
                      notables, j'ai dirigé la conception et la réalisation de
                      divers projets, dont un projet phare étant la création
                      d'un site e-commerce complet spécialisé dans la vente en
                      ligne d'accessoires. À ce titre, j'ai créé un magasin
                      dynamique et un backoffice intuitif, permettant aux
                      administrateurs et aux gestionnaires de gérer efficacement
                      les produits, les catégories et les ventes.
                    </p>
                  </div>
                  <div className="project-btn">
                    <a href={"https://www.arkx.group/"}>
                      <button>Visiter le site</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="project_work_page">
          {proj_data.map((e, index) => (
            <div
              className="section"
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="pcontainer">
                <img src={e.project_image} alt="project Images" />
                <div className="proj_header">
                  <h3>{e.project_name}</h3>
                  <h4>{e.proj_creation_date}</h4>
                </div>
                <div className="proj_descriptions">
                  <p>{e.proj_description}</p>
                </div>
                <div className="proj_btns">
                  <a
                    href={e.proj_code_like}
                    target={e.proj_code_like !== "#" ? "_blank" : ""}
                    rel="noreferrer"
                  >
                    <button className="proj_code">Project Code</button>
                  </a>
                  <a
                    href={e.proj_live_link}
                    target={e.proj_live_link !== "#" ? "_blank" : ""}
                    rel="noreferrer"
                  >
                    <button className="proj_live">Live Project</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project_exp;
