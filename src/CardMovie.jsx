
export default function CardMovie({ film }) {

    // film.id

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
        <div className="col">
            <img
                className="immagine"
                src={film.poster_path ? `https://image.tmdb.org/t/p/w342${film.poster_path}` : 'https://picsum.photos/id/237/342/484'} alt={film.title}
            />
            <div className='scritte'>
                <p><strong>Titolo:</strong> {film.title}</p>
                <p><strong>Titolo Originale:</strong> {film.original_title}</p>
                <p><strong>Language:</strong> {fleg(film.original_language)} ({film.original_language})</p>
                <p><strong>Vote:</strong> {'⭐'.repeat(Math.round(film.vote_average / 2))}</p>

            </div>
        </div>
    )
}


