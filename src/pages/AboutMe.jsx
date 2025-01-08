import "./AboutMe.css";

function AboutMe() {
  // const pageStyle = {
  //   backgroundColor: '#E4F060', // Replace with your desired color
  //   height: '100vh', // Ensure it covers the full viewport height
  //   width: '100vw', // Ensure it covers the full viewport width
  //   margin: '0px', // Remove default margin
  //   padding: '0px', // Remove default padding
  //   display: 'flex',
  //   justifyContent: 'center', // Center content horizontally
  // };

  return (
<body>
  <section className="content">
    <article id="about-me" className="about-me">
    <div className="line2"></div>
      <h1 className="section-title">Do I have to introduce myself?</h1>
      <div className="line2"></div>

      <div className="split">
        <div className="bg-left">
          <h1>Hi, I'm Jacke.</h1>
          <p>Allow me to introduce myself. I am a passionate designer and developer with a desire to learn. I am skilled in multiple areas
            including graphic design, UI design, full stack devlopment and fine art. </p>

            <img
              className="intro"
              src="../src/assets/images/jacke4.jpg"
              alt="?"/>

        </div>

        <div className="bg-right">
        <div className="skills-section">
            <h2 className="skills">Technical Skills</h2>
            <div className="line2"></div>

            <span className="skill-badge design">InDesign</span>
            <span className="skill-badge design">Illustrator</span>
            <span className="skill-badge desgin">Photoshop</span>
            <span className="skill-badge desgin">Canva</span>
            <span className="skill-badge design">Figma</span>
            <br></br>

            <span className="skill-badge frontend">HTML</span>
            <span className="skill-badge frontend">CSS</span>
            <span className="skill-badge frontend">JavaScript</span>
            <span className="skill-badge frontend">React</span>
            <span className="skill-badge frontend">Bootstrap</span>
            <br></br>

            <span className="skill-badge backend">Node.js</span>
            <span className="skill-badge backend">Express</span>
            <br></br>

            <span className="skill-badge databases">MySQL</span>
            <span className="skill-badge databases">MongoDB</span>
            <br></br>

            <span className="skill-badge devops">Github</span>

        </div>
      </div>
      </div>











{/* Original code */}


          {/* <div className="about-me-text">
            <img
              className="intro"
              src="../src/assets/images/jacke4.jpg"
              alt="?"/>

            <h2>Hi, my name is Jacke.</h2>

            <p></p>
            <p>
              I am a certified Full Stack Web Developer specializing in User
              Interface and Graphic Design. My journey has been driven by a
              commitment to continuous learning and a desire to merge
              functionality with aesthetic appeal, ensuring that every project
              not only meets technical requirements but also resonates with
              users on a deeper level. <br></br>
              <br></br>I am a certified Full Stack Web Developer specializing in
              User Interface and Graphic Design. My journey has been driven by a
              commitment to continuous learning and a desire to merge
              functionality with aesthetic appeal, ensuring that every project
              not only meets technical requirements but also resonates with
              users on a deeper level. <br></br>
              <br></br>I am a certified Full Stack Web Developer specializing in
              User Interface and Graphic Design. My journey has been driven by a
              commitment to continuous learning and a desire to merge
              functionality with aesthetic appeal, ensuring that every project
              not only meets technical requirements but also resonates with
              users on a deeper level. <br></br>
              <br></br>I have experience in agile methodologies and am
              passionate about working with teams to put forth the best product
              possible.<br></br>
              <br></br>I have always been a creative at heart, doodling where I
              wasn't supposed to be for as long as I can remember. When I came
              across graphic design and installed my first Adobe program, my
              creativity felt purposeful and a newfound passion for the design
              world erupted. Since then, I have continued to further my
              knowledge in the web development and design world, incorporating
              the latest technologies and design principles to create innovative
              and user-friendly applications.
            </p>
          </div>

          <div className="line2"></div>
          <div className="skills-section">
            <h2 className="skills">Technical Skills</h2>
            <div className="line2"></div>

            <span className="skill-badge design">InDesign</span>
            <span className="skill-badge design">Illustrator</span>
            <span className="skill-badge desgin">Photoshop</span>
            <span className="skill-badge desgin">Canva</span>
            <span className="skill-badge design">Figma</span>
            <br></br>

            <span className="skill-badge frontend">HTML</span>
            <span className="skill-badge frontend">CSS</span>
            <span className="skill-badge frontend">JavaScript</span>
            <span className="skill-badge frontend">React</span>
            <span className="skill-badge frontend">Bootstrap</span>
            <br></br>

            <span className="skill-badge backend">Node.js</span>
            <span className="skill-badge backend">Express</span>
            <br></br>

            <span className="skill-badge databases">MySQL</span>
            <span className="skill-badge databases">MongoDB</span>
            <br></br>

            <span className="skill-badge devops">Github</span>
          </div> */}
        </article>
      </section>

    </body>
  );
}

export default AboutMe;
