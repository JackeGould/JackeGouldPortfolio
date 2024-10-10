// import { Outlet } from 'react-router-dom';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
// import { useState } from 'react';

// function App() {

//   const [color, changeColor] = useState

//   // return (
//   //   <>
//   //     <Nav />
//   //     <main >
//   //     <Outlet />
//   //     </main >
//   //     <Footer />
//   //   </>
//   // );
// }

// export default App;



// import { useState } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Home from "./pages/Home";
// import AboutMe from "./pages/AboutMe";
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';

// function App() {

//   const [color, changeColor] = useState('#E4F060');
//   return(
//     <div style={{background: color }}>
//       <Router>
//         <div><Link to='/' onClick={() => changeColor('#FFFFFF')}>Home</Link></div>
//         <div><Link to='/AboutMe/' onClick={() => changeColor('#E4F060')}>About Me</Link></div>
//         <div><Link to='/Portfolio/' onClick={() => changeColor('#E4F060')}>Portfolio</Link></div>
//         <div><Link to='/Contact/' onClick={() => changeColor('#E4F060')}>Contact</Link></div>

//         <Route path='/' exact pages={Home} />
//         <Route path='/AboutMe/' pages={AboutMe} />
//         <Route path='/Portfolio/' pages={Portfolio} />
//         <Route path='/Contact/' pages={Contact} />
//       </Router>
//     </div>
//   )

// }

// export default App;

import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  // Get the color from localStorage, or default to white if not present
  const [color, changeColor] = useState(localStorage.getItem('bgColor') || '#FFFFFF');

  // Update localStorage whenever the color changes
  useEffect(() => {
    localStorage.setItem('bgColor', color);
  }, [color]);

  return (
    <div style={{ backgroundColor: color, minHeight: '100vh'}}>
      <Nav changeColor={changeColor} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;