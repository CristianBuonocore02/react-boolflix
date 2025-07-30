import React, { useState } from 'react';
const api_key = import.meta.env.VITE_SOME_KEY
import './index.css';


function App() {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [series, setSeries] = useState([]);


  const cercaFilmESerie = () => {
    if (!query.trim()) return;

    // Chiamata all'API
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`)
      .then(response => response.json())
      .then(data => {
        setFilms(data.results);
      })


    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${query}`)
      .then(response => response.json())
      .then(data => {
        setSeries(data.results);
      })

  };

  function fleg(lang) {
    const flags = {
      en: '🇬🇧',
      it: '🇮🇹',
      fr: '🇫🇷',
      es: '🇪🇸',
      de: '🇩🇪',
      ja: '🇯🇵',
      ru: '🇷🇺',
      zh: '🇨🇳',
      ar: '🇸🇦',
      pt: '🇵🇹'
    };

    return flags[lang] || '🏳️';
  }


  return (
    <div>

      <header>
        <div className="navbar">
          <img className='logo' src="Boolflix.png" alt="logo Booltflix" />

          {/* Barra di ricerca */}
          <div>
            <div className='imput'>
              <input className='rounded'
                type="text"
                placeholder="Scrivi il titolo del film/serieTv"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn btn-outline-danger rounded" onClick={cercaFilmESerie}>Cerca</button>
            </div>
          </div>
        </div>
      </header >

      <main>
        <section>

          {/* Lista dei film trovati */}
          <div className='title'>
            <h2 >Film</h2>
            {films.length === 0 && <p>Nessun risultato trovato.</p>}
          </div>
          <ul>
            {films.map((film) => (
              <li key={film.id}>
                <img className='immagine' src={`https://image.tmdb.org/t/p/w342${film.poster_path}`} alt={film.title} />
                <div className='scritte'>
                  <p><strong>Titolo:</strong> {film.title}</p>
                  <p><strong>Titolo Originale:</strong> {film.original_title}</p>
                  <p><strong>Language:</strong> {fleg(film.original_language)} ({film.original_language})</p>
                  <p><strong>Vote:</strong> {'⭐'.repeat(Math.round(film.vote_average / 2))}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>





        {/* Lista delle Serie trovate */}
        <section>
          <div className='title'>
            <h2 >Serie Tv</h2>
            {series.length === 0 && <p>Nessun risultato trovato.</p>}
          </div>
          <ul>
            {series.map((serie) => (
              <li key={serie.id}>
                <img className='immagineSerie' src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`} alt={serie.name} />
                <div className='scritte'>
                  <p><strong>Titolo:</strong> {serie.name}</p>
                  <p><strong>Titolo Originale:</strong> {serie.original_name}</p>
                  <p><strong>Language:</strong> {fleg(serie.original_language)} ({serie.original_language})</p>
                  <p><strong>Vote:</strong> {'⭐'.repeat(Math.round(serie.vote_average / 2))}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div >
  );
}

export default App;
