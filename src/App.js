import { useState } from 'react';
import English from './lang/en.json';
import Spanish from './lang/es.json';
import './App.css';

const local = navigator.language || 'en';
const _lang = (local === 'es') ? Spanish : English;

function App() {
  const [lang, setLang] = useState(_lang);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={()=> setLang(English)}>EN</button>
          <button onClick={()=> setLang(Spanish)}>ES</button>
        </div>
        <h1>{lang.appHeader}</h1>
        <p>{lang.appSubhead}</p>
      </header>
    </div>
  );
}

export default App;
