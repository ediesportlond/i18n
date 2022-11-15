import './App.css';
import English from './lang/en.json';
import Spanish from './lang/es.json';

const local = navigator.language || 'en';
const lang = (local === 'es') ? Spanish : English;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{lang.appHeader}</h1>
        <p>{lang.appSubhead}</p>
      </header>
    </div>
  );
}

export default App;
