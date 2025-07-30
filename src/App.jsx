import React, { useState } from 'react';
const api_key = import.meta.env.VITE_SOME_KEY
import './index.css';
import CardMovie from './CardMovie';
import CardSerie from './CardSerie';


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
          <div className='title'>
            <h2 >Film</h2>
            {films.length === 0 && <p>Nessun risultato trovato.</p>}
          </div>
          <div className="row">
            {films.map((film) => (
              <CardMovie film={film} key={film.id} />
            ))}
          </div>
        </section>


        <section>
          <div className='title'>
            <h2 >Serie Tv</h2>
            {series.length === 0 && <p>Nessun risultato trovato.</p>}
          </div>
          <div className="row">
            {series.map((serie) => (
              <CardSerie serie={serie} key={serie.id} />
            ))}
          </div>
        </section>
      </main>
    </div >
  );
}

export default App;






