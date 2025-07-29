import React, { useState } from 'react';
const api_key = import.meta.env.VITE_SOME_KEY


function App() {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);

  const cercaFilm = () => {
    if (!query.trim()) return;

    // Chiamata all'API
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`)
      .then(response => response.json())
      .then(data => {
        setFilms(data.results);
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
      <h1>Ricerca Film</h1>

      {/* Barra di ricerca */}
      <div>
        <input
          type="text"
          placeholder="Scrivi il titolo del film"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={cercaFilm}>Cerca</button>
      </div>

      {/* Lista dei film trovati */}
      <div>
        {films.length === 0 && <p>Nessun risultato trovato.</p>}
        <ul>
          {films.map((film) => (
            <li key={film.id}>
              <p><strong>Titolo:</strong> {film.title}</p>
              <p><strong>Titolo Originale:</strong> {film.original_title}</p>
              <p><strong>Language:</strong> {fleg(film.original_language)} ({film.original_language})</p>
              <p><strong>Voto:</strong> {film.vote_average}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
