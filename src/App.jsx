import './App.css';
import Projects from './components/Projects';
import Main from './components/Main';
import Contact from './components/Contact';
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="w-full">
      <Main/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
