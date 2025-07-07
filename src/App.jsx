import './App.css';
import Projects from './components/Projects';
import Main from './components/Main';
import Contact from './components/Contact';
import './index.css'

function App() {
  return (
    <div className="w-full">
      <Main/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
