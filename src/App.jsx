import { useState } from 'react'


function App() {
  const libri = [
    { id: 1, titolo: 'Il nome della rosa' },
    { id: 2, titolo: 'Cent anni di solitudine' },
    { id: 3, titolo: 'La coscienza di Zeno' },
    { id: 4, titolo: '1984' },
    { id: 5, titolo: 'Il giovane Holden' },
  ];
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mt-4">
        <h1>Lista Articoli</h1>
        <ul className="list-group">
          {libri.map((libro) => (
            <li key={libro.id} className="list-group-item">
              {libro.titolo}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
