import Project from "../components/Project";
import "./Webdev.css";
import Project1 from "../assets/images/Project1.png";
import Project2 from "../assets/images/Project2.png";
import Project3 from "../assets/images/Project3.png";
import Project4 from "../assets/images/Project4.png";
import Project5 from "../assets/images/Project5.png";
import Project6 from "../assets/images/Project6.png";

const projects = [
    {
      title: "PawFolio",
      deployLink: "https://pawfolio-kk2s.onrender.com/",
      repoLink: "https://github.com/mojo718/PawFolio",
      image: Project1, // Replace with actual image URL
    },
    {
      title: "Expense Tracker",
      deployLink: "https://afternoon-plains-88345-4279b3a41bbe.herokuapp.com/",
      repoLink: "https://github.com/JackeGould/expense-tracker",
      image: Project2, // Replace with actual image URL
    },
    {
      title: "PicSure?",
      deployLink: "https://santy520.github.io/Picsure-game/",
      repoLink: "https://github.com/Santy520/Picsure-game",
      image: Project3, // Replace with actual image URL
    },
    {
      title: "Weather Dashboard",
      deployLink: "https://jackegould.github.io/weather-dashboard/",
      repoLink: "https://github.com/JackeGould/weather-dashboard",
      image: Project4, // Replace with actual image URL
    },
    {
      title: "Password Generator",
      deployLink: "https://jackegould.github.io/password-generator/",
      repoLink: "https://github.com/JackeGould/password-generator",
      image: Project5, // Replace with actual image URL
    },
    {
      title: "Coding Quiz",
      deployLink: "https://jackegould.github.io/code-quiz/",
      repoLink: "https://github.com/JackeGould/code-quiz",
      image: Project6, // Replace with actual image URL
    },
  ];

  function Webdev() {
    return (
      <div className="webdev-container">
        <h2 className="section-title">Applications</h2>
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
        </div>
      </div>
    );
  }
  
  
//   function Webdev() {
  
//       return (
//           <div className='webdev-container'>
//                   <h1 className='section-title'>Applications</h1>
//                   <div className='apps-container'>
//               </div>
//               <div className='designs'>
//                   <h1>Design</h1>
//               </div>
//           </div>
//       )
//   }
  
  export default Webdev;