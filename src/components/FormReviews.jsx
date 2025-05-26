import axios from "axios"
import { useState } from "react"

export default function FormReviews({ id, getMovie }) {
    const initialFormData={
        name:'',
        vote:1,
        text:''
    }
    const [formData, setFromData]= useState(initialFormData)



    function sendData(event){
        const{name,value}= event.target

        let correctValue =value
        if(name === 'vote'){
            correctValue = parseInt(value)
        }

        setFromData((formData)=>({
            ...formData,
            [name]:correctValue
        }))
        
    }
    function sendDataServer(event){
        event.preventDefault()
        axios.post(`http://127.0.0.1:3000/movies/${id}/reviews`, formData)
            .then(response=>(
                getMovie(),
                setFromData(initialFormData)
            ))
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={sendDataServer}>
            <div className="card">
                <div className="card-header">
                    <h4>Scrivi Qui una tua Recensione</h4>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="reviews-name" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="reviews-name" placeholder="Inserisci in tuo nome" value={formData.name} name="name" onChange={sendData} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="form-vote" className="form-label">Voto</label>
                        <input type="number" min={1} max={5} className="form-control" id="form-vote" placeholder="Inserici un voto" value={formData.vote} name="vote"onChange={sendData} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="form-text" className="form-label">Testo Recensione</label>
                        <textarea className="form-control" id="form-text" rows="3" value={formData.text} name="text" onChange={sendData} required></textarea>
                    </div>
                    <div className="mb-3">
                       <button type="submit" className="btn btn-danger">Aggiungi</button>
                    </div>
                </div>
            </div>
        </form>
    )
}