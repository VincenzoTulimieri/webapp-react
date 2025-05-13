import { useParams } from "react-router-dom"

export default function MovieDetails(){

    const {id} = useParams()
    console.log(id)

    return(
        <div className="container">
            <h1 className="vt-text-color">film nel dettaglio</h1>
        </div>
        
        
    )
}