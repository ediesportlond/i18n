import { useState, createContext } from 'react';
import Details from './components/Details';
import English from './lang/en.json';
import Spanish from './lang/es.json';
import './App.css';

const local = navigator.language || 'en';
const _lang = (local === 'es') ? Spanish : English;

export const LanguageContext = createContext(_lang);

function App() {
  const [lang, setLang] = useState(_lang);
  return (
    <LanguageContext.Provider value={{ lang }}>
      <div className="App">
        <header className="App-header">
          <div>
            <button onClick={() => setLang(English)}>EN</button>
            <button onClick={() => setLang(Spanish)}>ES</button>
          </div>
          <h1>{lang.appHeader}</h1>
          <p>{lang.appSubhead}</p>
          <Details />
        </header>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
