import { useContext } from 'react';
import { LanguageContext } from '../App';

export default function Details() {
  const { lang } = useContext(LanguageContext);

  return (
    <>
      <section>
        <h3>{lang.detailsHeader}</h3>
        <p>{lang.detailsText}</p>
      </section>
    </>
  )
}