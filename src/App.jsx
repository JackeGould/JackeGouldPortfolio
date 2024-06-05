import './App.css'

import { Outlet } from 'react-router-dom';
import Nav from './src/components/Nav';
import Footer from './src/components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
