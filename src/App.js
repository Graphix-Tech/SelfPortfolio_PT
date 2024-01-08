import './styles.css'
import Header from './components/NavBar/Header';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Work from './components/Works/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
    <Header/>
    <Intro/>
    <Skills/>
    <Work/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
