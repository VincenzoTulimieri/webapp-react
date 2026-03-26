import axios from "axios"
import { useState } from "react"
import StarInput from "./StarInput"

export default function FormReviews({ id, getMovie }) {

    const initialFormData = {
        name: '',
        vote: 1,
        text: ''
    }

    const [formData, setFormData] = useState(initialFormData)
    const [successMessage, setSuccessMessage] = useState('')
    const [isSending, setIsSending] = useState(false)

    function sendData(event) {
        const { name, value } = event.target

        let correctValue = value
        if (name === 'vote') {
            correctValue = parseInt(value)
        }

        setFormData(prev => ({
            ...prev,
            [name]: correctValue
        }))
    }

    function handlerStarChange(starValue){
        setFormData(prev =>({
            ...prev,
            vote: starValue
        }))
    }

    function sendDataServer(event) {
        event.preventDefault()

        setIsSending(true)
        setSuccessMessage('')

        axios.post(`http://localhost:3000/movies/${id}/reviews`, formData)
            .then(() => {
                getMovie()
                setFormData(initialFormData)
                setSuccessMessage('Recensione pubblicata!')
            })
            .catch(err => console.log(err))
            .finally(() => setIsSending(false))
    }

    return (
        <form className="vt-review-form" onSubmit={sendDataServer}>

            <div className="vt-form-header">
                <h3>Scrivi una recensione</h3>
                <p>Condividi il tuo parere su questo film</p>
            </div>

            <div className="vt-form-group">
                <label>Nome</label>
                <input
                    type="text"
                    placeholder="Il tuo nome"
                    value={formData.name}
                    name="name"
                    onChange={sendData}
                    required
                />
            </div>

            <div className="vt-form-group">
                <label>Voto</label>
                <StarInput value={formData.vote} onChange={handlerStarChange} />
            </div>

            <div className="vt-form-group">
                <label>Recensione</label>
                <textarea
                    placeholder="Scrivi qui la tua recensione..."
                    value={formData.text}
                    name="text"
                    onChange={sendData}
                    required
                ></textarea>
            </div>

            <div className="vt-form-footer">
                <button type="submit" disabled={isSending}>
                    {isSending ? "Invio..." : "Pubblica"}
                </button>
            </div>

            {successMessage && (
                <div className="vt-success">
                    {successMessage}
                </div>
            )}

        </form>
    )
}