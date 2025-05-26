import { useState, useEffect } from "react"
import axios from "axios"

export default function AddNewMovies() {
    const initialValue = {
        title:'',
        genre:'',
        director:'',
        abstract:'',
        image: null
    }

    const [formDataFilm, setFromDataFilm] = useState(initialValue)

    function sendData(event){
        const {name, value, files}= event.target
        let currentValue = value

        if(name === 'image'){
            currentValue = files[0]
        }

        setFromDataFilm((formDataFilm)=>({
            ...formDataFilm,
            [name]:currentValue
        }))
    }

    function sendDataServer(event){
        event.preventDefault()
        axios.post(`http://127.0.0.1:3000/movies`, formDataFilm,{headers:{"Content-Type":"multipart/form-data"}})
            .then(response=>(
                setFromDataFilm(initialValue)
            ))
            .catch(err=>console.log(err)
        )
    }

    return (
        <div className="container mb-3">
            <div className="card">
                <div className="card-header">
                    <h4>Aggiungi il tuo Film Preferito da Consigliare</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={sendDataServer}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Titolo del Film</label>
                            <input type="text" className="form-control" id="title" placeholder="Inserisci il titolo" value={formDataFilm.title} name="title" onChange={sendData} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="genre" className="form-label">Genere</label>
                            <input type="text" className="form-control" id="genre" placeholder="Inserisci il genere" value={formDataFilm.genre} name="genre" onChange={sendData} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="director" className="form-label">Regista</label>
                            <input type="text" className="form-control" id="director" placeholder="Inserisci il regista" value={formDataFilm.director} name="director" onChange={sendData} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="abstract" className="form-label">Trama</label>
                            <textarea className="form-control" id="abstract" rows="3" value={formDataFilm.abstract} name="abstract" onChange={sendData} required></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Immagine</label>
                            <input className="form-control" type="file" id="image" name="image" onChange={sendData} required/>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-danger">Aggiungi</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}