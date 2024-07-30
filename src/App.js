import './App.css';

const projects = [
  {
    name: "Korio Clinical",
    link: "https://korioclinical.com",
    primary: false
  },
  {
    name: "Ntense Car Wraps",
    link: "https://ntensewraps.com",
    primary: true
  },
  {
    name: "Schoodic Solutions",
    link: "https://schoodic.io",
    primary: false
  },
  {
    name: "Driver Courtesy",
    link: "https://driverscourtesy.com",
    primary: false
  },
  {
    name: "TrustEngine",
    link: "https://trustengine.com/sales-boomerang/",
    primary: false
  },
  {
    name: "Proplinx",
    link: "/",
    primary: false
  }
];

const contactOptions = [
  {
    name: "+1 (847) 809-9721",
    link: "tel:+19478099721",
    primary: true
  },
  {
    name: "pjvaldezswe@gmail.com",
    link: "mailto:pjvaldezswe@gmail.com",
    primary: false
  },
  {
    name: "Cornelia Ave, Port St. Lucie, FL",
    link: "https://maps.app.goo.gl/MjdSYoqJKJg2MHNG6",
    primary: false
  }
]

function App() {
  return (
    <div className="main">
      <img className="logo" src="https://cdn.molai.dev/Logo.png" alt="Pearl Wise"/>
      <div className="frame">
        <header className="header">
          <div className="left">
            <div className="div">EXPERIENCED FRONT-END DEVELOPER</div>
            <p className="p">
              Hey, I’m Pearl Wise, a staff front-end engineer, closing in on around 5+ years of experience.
            </p>
            <div className="buttons">
              <div className="CTA" onClick={() => window.open('tel:+18478099721', '_blank')} style={{cursor: "pointer"}}>
                <div className="div-wrapper"><div className="text-wrapper-2">Get In Touch</div></div>
              </div>
            </div>
          </div>
          <div className="rectangle-wrapper">
            <img
              className="img"
              src="https://cdn.animaapp.com/projects/65d47205d090550b546b3ecf/releases/667f46b58769a090840ae2d5/img/rectangle-9@2x.png"
            />
          </div>
        </header>
        <div className="about-us">
          <p className="text-wrapper-4">
            I have worked for several businesses over the past few
            years. Other than that, I am a pet-lover, with 40 pets at home.
          </p>
          <div className="frame-2">
            <div className="text-wrapper-5">ABOUT ME</div>
            <p className="who-am-i-what-i-do">
              <span className="text-wrapper-6">Who am I?</span>
              <br className='whoAmIBR'/>
              <span className="span"> &amp; What I do</span>
            </p>
          </div>
        </div>
        <div className="services">
          <div className="div-2">
            <div className="frame-3">
              <div className="text-wrapper-7">MY PROJECTS</div>
              <p className="what-i-have-worked">
                <span className="span">What I Have </span><br/><span className="text-wrapper-6">Worked On</span>
              </p>
            </div>
            <p className="text-wrapper-8">These are some of the companies that I have worked with, and the projects I participated on.</p>
          </div>
          <div className="div-3">
  {projects.map((project, index) => (
    <div
      className="div-4"
      key={index}
      onClick={() => window.open(project.link)}
      style={{ cursor: "pointer", marginBottom: index === projects.length - 1 ? "25px" : "0px" }}
    >
      <div className="text-wrapper-9" style={project.primary ? {color: "white"} : {}}>{project.name}</div>
      <div className="arrow">
        <img
          className="arrow-2"
          src="https://cdn.animaapp.com/projects/65d47205d090550b546b3ecf/releases/667f46b58769a090840ae2d5/img/arrow-5-3.svg"
          alt="arrow"
        />
      </div>
    </div>
  ))}
</div>


        </div>
        <div className="contact">
          <div className="div-2">
            <p className="text-wrapper-11">
              Feel free to leave an email or a text on my number, or call me. 
            </p>
            <div className="frame-4">
              <div className="text-wrapper-5">CONTACT ME</div>
              <p className="get-in-touch-with-me">
                <span className="span">Get In Touch With </span>
                <span className="text-wrapper-6">Me.</span>
              </p>
            </div>
          </div>
          <div className="div-3">
  {contactOptions.map((opt, index) => (
    <div
      className="div-4"
      key={index}
      onClick={() => window.open(opt.link)}
      style={{ cursor: "pointer", marginBottom: index === contactOptions.length - 1 ? "25px" : "0px" }}
    >
      <div className="text-wrapper-9" style={opt.primary ? {color: "white"} : {}}>{opt.name}</div>
      <div className="arrow">
        <img
          className="arrow-2"
          src="https://cdn.animaapp.com/projects/65d47205d090550b546b3ecf/releases/667f46b58769a090840ae2d5/img/arrow-5-3.svg"
          alt="arrow"
        />
      </div>
    </div>
  ))}
</div>


        </div>
      </div>
    </div>
  );
}

export default App;