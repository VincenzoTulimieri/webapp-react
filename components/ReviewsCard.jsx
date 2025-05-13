export default function ReviewsCard({data}) {
    const{id, name, vote, text}= data
    return (
        <div className="card mb-3">
            <div className="card-body">
                <p className="vt-text-dimension">Nome: <strong>{name}</strong></p>
                <p className="vt-text-dimension">Voto: <strong>{vote}</strong></p>
                <p>{text}</p>
            </div>
        </div>
    )
}
