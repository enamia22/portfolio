import React from 'react';
import SData from './assets/ApplicationData';
import './Skills.css';
function Skills() {

  return (
    <>
      <section id="my_skill">
        <div className="my_skills">
          <h2>
            Mes skills
          </h2>
        </div>
        <div className="contain_div">
          <div className="container_s">
            {SData.map((e, index) => (
              <div
                className="skill_box"
                key={index}
                style={{ boxShadow: `0px 0px 12px ${e.bx_shadow}` }}
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <div className="content_img_container">
                  <img
                    src={e.img_link}
                    alt={e.img_content}
                    style={{ height: e.img_height, filter: e.img_styles }}
                    loading="lazy"
                  />
                </div>
                <h3>{e.skill_name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
