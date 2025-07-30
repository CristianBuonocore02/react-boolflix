


export default function CardSerie({ serie }) {

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


    // serie.id
    return (
        <div className="col">
            <img
                className="immagine"
                src={serie.poster_path ? `https://image.tmdb.org/t/p/w342${serie.poster_path}` : 'https://picsum.photos/id/237/342/484'} alt={serie.name}
            />
            <div className='scritte'>
                <p><strong>Titolo:</strong> {serie.name}</p>
                <p><strong>Titolo Originale:</strong> {serie.original_name}</p>
                <p><strong>Language:</strong> {fleg(serie.original_language)} ({serie.original_language})</p>
                <p><strong>Vote:</strong> {'⭐'.repeat(Math.round(serie.vote_average / 2))}</p>

            </div>
        </div>
    )
}


