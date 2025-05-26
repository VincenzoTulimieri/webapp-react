export default function AddNewMovies() {





    return (
        <>
            <div className="card container mb-3">
                <div className="card-header">
                    <h4>Aggiungi il tuo Film Preferito</h4>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Titolo del Film</label>
                            <input type="text" className="form-control" id="title" placeholder="Inserisci il titolo" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="genre" className="form-label">Genere</label>
                            <input type="text" className="form-control" id="genre" placeholder="Inserisci il genere" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="director" className="form-label">Regista</label>
                            <input type="text" className="form-control" id="director" placeholder="Inserisci il regista" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="abstract" className="form-label">Trama</label>
                            <textarea className="form-control" id="abstract" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Immagine</label>
                            <input class="form-control" type="file" id="image" />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-danger">Aggiungi Film</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}