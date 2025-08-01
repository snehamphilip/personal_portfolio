import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import CertificatesSection from './components/CertificatesSection';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Header from './components/Header';

function App() {
  return (
    <div >
      <Header/>
      <Hero/>
      <Education/>
      <Experience/>
      <Skills/>
      <Projects/>
      <CertificatesSection/>
      <Footer/>
    </div>
  );
}

export default App;
