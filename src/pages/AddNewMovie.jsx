import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function AddNewMovies() {
    const initialValue = {
        title: '',
        genre: '',
        director: '',
        abstract: '',
        image: null
    }

    const [formDataFilm, setFormDataFilm] = useState(initialValue)
    const [successMessage, setSuccessMessage] = useState('')
    const [isSending, setIsSending] = useState(false)

    function sendData(event) {
        const { name, value, files } = event.target
        let currentValue = value

        if (name === 'image') {
            currentValue = files[0]
        }

        setFormDataFilm((prev) => ({
            ...prev,
            [name]: currentValue
        }))
    }

    function sendDataServer(event) {
        event.preventDefault()
        setIsSending(true)
        setSuccessMessage('')

        axios.post(`http://127.0.0.1:3000/movies`, formDataFilm, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(() => {
                setSuccessMessage('Film aggiunto con successo')
                setFormDataFilm(initialValue)
            })
            .catch(err => console.log(err))
            .finally(() => setIsSending(false))
    }

    return (
        <section className="container vt-add-movie-page">
            <div className="vt-form-box mt-5">
                <div className="vt-form-box-header">
                    <h1>Aggiungi un nuovo film</h1>
                    <p>Inserisci i dettagli del film che vuoi consigliare nella tua collezione.</p>
                </div>

                <form onSubmit={sendDataServer} className="vt-custom-form">
                    <div className="vt-form-group">
                        <label htmlFor="title">Titolo del film</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Inserisci il titolo"
                            value={formDataFilm.title}
                            name="title"
                            onChange={sendData}
                            required
                        />
                    </div>

                    <div className="vt-form-group">
                        <label htmlFor="genre">Genere</label>
                        <input
                            type="text"
                            id="genre"
                            placeholder="Inserisci il genere"
                            value={formDataFilm.genre}
                            name="genre"
                            onChange={sendData}
                            required
                        />
                    </div>

                    <div className="vt-form-group">
                        <label htmlFor="director">Regista</label>
                        <input
                            type="text"
                            id="director"
                            placeholder="Inserisci il regista"
                            value={formDataFilm.director}
                            name="director"
                            onChange={sendData}
                            required
                        />
                    </div>

                    <div className="vt-form-group">
                        <label htmlFor="abstract">Trama</label>
                        <textarea
                            id="abstract"
                            rows="4"
                            placeholder="Scrivi una breve descrizione del film"
                            value={formDataFilm.abstract}
                            name="abstract"
                            onChange={sendData}
                            required
                        ></textarea>
                    </div>

                    <div className="vt-form-group">
                        <label htmlFor="image">Immagine</label>
                        <div className="vt-file-upload">

                            <label htmlFor="image" className="vt-file-label">
                                <i className="fa-solid fa-upload"></i>
                                Scegli immagine
                            </label>

                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={sendData}
                                required
                            />

                            {formDataFilm.image && (
                                <span className="vt-file-name">
                                    {formDataFilm.image.name}
                                </span>
                            )}

                        </div>
                    </div>

                    <div className="vt-form-actions">
                        <button type="submit" className="vt-btn-submit" disabled={isSending}>
                            {isSending ? 'Invio...' : 'Aggiungi film'}
                        </button>
                    </div>
                </form>

                {successMessage && (
                    <div className="vt-success-box">
                        <span>{successMessage}</span>
                        <Link to="/movies" className="vt-success-link">
                            Torna alla lista dei film
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}