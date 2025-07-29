import { useState, useEffect } from 'react'


function App() {
  const [query, setQuery] = useState('');
  const [films, setfilms] = useState([])

  useEffect(() => {
    if (!query.trim()) {
      setfilms([]);
      return
    }
  })


  return (
    <>
      <h1>Cerca il film</h1>
    </>
  )
}

export default App
