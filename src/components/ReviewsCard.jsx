// importazione file
import StarRating from "../components/StarRating";

export default function ReviewsCard({data}) {
    const{id, name, vote, text}= data
    return (
        <div className="card mb-3">
            <div className="card-body">
                <p className="vt-text-dimension">Nome: <strong>{name}</strong></p>
                <p className="vt-text-dimension">Voto: <StarRating vote={vote}/></p>
                <p>{text}</p>
            </div>
        </div>
    )
}
