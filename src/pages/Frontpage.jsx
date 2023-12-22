import React from 'react';
import SocialMediaLinks from './components/SocialMediaLinks';
import SvgBackground from './components/SvgBackground';
import './Frontpage.css';
import TypeWriterEffect from 'react-typewriter-effect';

function Frontpage() {
  return (
    <>
      <div className="profile-container" id="home_page">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <p className="primary-text">
                Salut, moi c'est
                <span className="highlighted-text">Aimane Essaidi</span>
              </p>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1 style={{ display: 'flex', gap: '6px', color: '#fff' }}>
                  Je suis un
                  <span style={{ color: '#5198ff' }} className="type_effect">
                    <TypeWriterEffect
                      multiTextLoop
                      cursorColor="#f3f4f6"
                      multiText={[
                        'développeur frontend',
                        'développeur backend',
                        'développeur fullstack',
                        'ingénieur en informatique',
                      ]}
                      multiTextDelay={1000}
                      typeSpeed={100}
                    />
                  </span>
                </h1>
                <span className="profile-role-tagline">
                  Fort d'un solide parcours académique, 
                  je suis un professionnel déterminé à créer des solutions innovantes. 
                  Mon désir constant d'apprendre et d'explorer de nouvelles technologies me pousse à élargir continuellement 
                  mes compétences. Actuellement en quête d'une opportunité professionnelle pour évoluer, 
                  je suis convaincu que ma motivation et ma capacité d'adaptation me permettront de contribuer de 
                  manière positive au sein de votre entreprise.
                </span>
              </span>
              <div className="colz">
                <SocialMediaLinks />
              </div>
            </div>

            <div className="profile-options">
              <a href="https://www.linkedin.com/in/aimane-essaidi/">
                <button className="btn primary-btn">Engagez moi</button>
              </a>
              <a href="./AIMANE ESSAIDI CV FR.pdf" download>
                <button className="btn highlighted-btn">Obtenez mon CV</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <a href="#about_myself" className="profile-picture-background"></a>
          </div>
        </div>
        <SvgBackground />
      </div>
    </>
  );
}

export default Frontpage;
