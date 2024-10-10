import './AboutMe.css';

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
      
    {/* <div style={pageStyle}> */}
      <section className="content">
        <article id="about-me" className="about-me">
          <h2 className="section-title">About Me</h2>

          <div className="about-me-text">

          <img className="intro" src="../src/assets/images/Intro1.png" alt="?" />

          {/* <h2>Do I need to introduce myself?</h2> */}

            <h2>Hi, my name is Jacke.</h2>

            <p>


            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
              tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
              impedit suscipit sed magnam alias in, repellat expedita hic explicabo
              architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Velit voluptate exercitationem quaerat pariatur
              mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
              nostrum temporibus ad omnis nam rerum eligendi.
            </p>
          </div>

          <div className='skills-section'>
            <h2 className='skills'>Technical Skills</h2>
            <span className='skill-badge frontend'>HTML</span>
            <span className='skill-badge frontend'>CSS</span>
            <span className='skill-badge frontend'>JavaScript</span>
            
          </div>
        </article>
      </section>
    {/* </div> */}
    </body>
  );
}

export default AboutMe;