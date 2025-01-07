import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container">

      <div className="design">
        <h2 className="section-title">Graphic Design</h2>
        <div className="line2"></div>
        
        {/* Navigation Section */}
        <div className="nav">
          <nav>
            <ul>
            <a href="#editorial">Editorial</a>
            <a href="#ftfo">FTFO</a>
            <a href="#branding">Branding</a>
            <a href="#info">Infographic</a>
            <a href="#comic">Comic</a>
            </ul>
          </nav>
        </div>
        <div className="line2"></div>

        {/* Editorial Section with ID */}
        <div id="editorial" className="editorial">
          <h3 className="section-title">Editorial</h3>
          <div className="line2"></div>
          <div className="image-row">
          <div className="image-item">
              <img
                src="../src/assets/images/57.png"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
            <div className="image-item">
              <img
                src="../src/assets/images/58.png"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
            <div className="image-item">
              <img
                src="../src/assets/images/59.png"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
            <div className="image-item">
              <img
                src="../src/assets/images/60.png"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
            <div className="image-item">
              <img
                src="../src/assets/images/61.png"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
            <div className="image-item">
              <img
                src="../src/assets/images/62.png"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>

            <div className="image-item">
              <img
                src="../src/assets/images/17.png"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
            <div className="image-item">
              <img
                src="../src/assets/images/18.png"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
            <div className="image-item">
              <img
                src="../src/assets/images/16.png"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
          </div>
        </div>
      </div>

      {/* FTFO section is creating loading issues - wait to add until resolved */}

      {/* FTFO Section with ID */}
      {/* <div id="ftfo" className="FTFO">
        <div className="line2"></div>
        <h2 className="section-title">FTFO</h2>
        <div className="line2"></div>
        <div className="image-row">
          <div className="image-item">
            <img src="../src/assets/images/99.png" alt="Magazine Layout 1" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
            <img src="../src/assets/images/90.png" alt="Magazine Layout 2" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
            <img src="../src/assets/images/93.png" alt="Magazine Layout 3" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
            <img src="../src/assets/images/98.png" alt="Magazine Layout 4" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
            <img src="../src/assets/images/88.png" alt="Magazine Layout 5" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
              <img
                src="../src/assets/images/92.png"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
        </div>
      </div> */}

      <div id="branding" className="branding">
        <div className="line2"></div>
        <h2 className="section-title">Branding</h2>
        <div className="line2"></div>
        <div className="image-row">
          <div className="image-item">
            <img src="../src/assets/images/6.jpg" alt="Magazine Layout 1" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
            <img src="../src/assets/images/15.png" alt="Magazine Layout 2" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
            <img src="../src/assets/images/21.png" alt="Magazine Layout 3" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
            <img src="../src/assets/images/10.jpg" alt="Magazine Layout 4" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
            <img src="../src/assets/images/20.png" alt="Magazine Layout 5" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
              <img
                src="../src/assets/images/23.png"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
            <div className="image-item">
              <img
                src="../src/assets/images/mockup.png"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
        </div>
      </div>

      <div id="info" className="info">
        <div className="line2"></div>
        <h2 className="section-title">Infographic</h2>
        <div className="line2"></div>
        <div className="image-row">
          <div className="image-item">
            <img src="../src/assets/images/8.jpg" alt="Magazine Layout 1" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
            <img src="../src/assets/images/9.jpg" alt="Magazine Layout 2" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
        </div>
      </div>

      <div id="comic" className="comic">
        <div className="line2"></div>
        <h2 className="section-title">Comic</h2>
        <div className="line2"></div>
        <div className="image-row">
          <div className="image-item">
            <img src="../src/assets/images/45.jpg" alt="Magazine Layout 1" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
            <img src="../src/assets/images/46.jpg" alt="Magazine Layout 2" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
            <img src="../src/assets/images/47.jpg" alt="Magazine Layout 3" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
            <img src="../src/assets/images/48.jpg" alt="Magazine Layout 4" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
            <img src="../src/assets/images/49.jpg" alt="Magazine Layout 5" />
            <h3>Magazine Publication Layout & Design</h3>
            <h4>Adobe Photoshop, Indesign</h4>
          </div>
          <div className="image-item">
              <img
                src="../src/assets/images/50.jpg"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
            {/* <div className="image-item">
              <img
                src="../src/assets/images/51.jpg"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
            <div className="image-item">
              <img
                src="../src/assets/images/52.jpg"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
            <div className="image-item">
              <img
                src="../src/assets/images/53.jpg"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
            <div className="image-item">
              <img
                src="../src/assets/images/54.jpg"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
            <div className="image-item">
              <img
                src="../src/assets/images/55.jpg"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div>
            <div className="image-item">
              <img
                src="../src/assets/images/56.jpg"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <h3>Magazine Publication Layout & Design</h3>
              <h4>Adobe Photoshop, Indesign</h4>
            </div> */}
        </div>
      </div>

    </div>



  );
}


      {/* <h2 className="section-title">Applications</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <Project 
                title={project.title} 
                deployLink={project.deployLink} 
                repoLink={project.repoLink} 
                image={project.image} 
              />
            </div>
          ))}
        </div> */}


// function Portfolio() {

//     return (
//         <div className='portfolio-container'>
//                 <h1 className='section-title'>Applications</h1>
//                 <div className='apps-container'>
//             </div>
//             <div className='designs'>
//                 <h1>Design</h1>
//             </div>
//         </div>
//     )
// }

export default Portfolio;
