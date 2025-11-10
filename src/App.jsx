import { useState } from 'react'


function App() {
  const books = [
    { id: 1, titolo: 'Il nome della rosa' },
    { id: 2, titolo: 'Cent anni di solitudine' },
    { id: 3, titolo: 'La coscienza di Zeno' },
    { id: 4, titolo: '1984' },
    { id: 5, titolo: 'Il giovane Holden' },
  ];
  const [libri, setLibri] = useState(books);
  const [nuovoTitolo, setNuovoTitolo] = useState('');

  // aggiungere libro 
  const invio = (e) => {
    e.preventDefault();
    if (nuovoTitolo.length === 0) return;
    const nuovoLibro = {
      id: libri.length + 1,
      titolo: nuovoTitolo,
    };
    setLibri([...libri, nuovoLibro]);
    setNuovoTitolo('');
  };

  // eliminare il libro
  const eliminaLibro = (id) => {
    const listaAggiornata = libri.filter((libro) => libro.id !== id);
    setLibri(listaAggiornata);
  };

  // salvare modifica
  const salvaModifica = (id) => {
    const listaAggiornata = libri.map((libro) =>
      libro.id === id ? { ...libro, titolo: titoloModificato } : libro
    );
    setLibri(listaAggiornata);
    setLibroInModifica(null);
    setTitoloModificato('');
  };


  return (
    <>


      <div className="container mt-4">
        <h1>Lista Articoli</h1>
        <form onSubmit={invio}>
          <input type='text' value={nuovoTitolo} onChange={e => setNuovoTitolo(e.target.value)} />
          <button>
            Invia
          </button>
        </form>

        <ul className="list-group">
          {libri.map((libro) => (
            <li key={libro.id} className="list-group-item d-flex justify-content-between align-items-center">
              {libro.titolo}
              <button className="btn btn-danger btn-sm" onClick={() => eliminaLibro(libro.id)} >
                <i className="bi bi-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
