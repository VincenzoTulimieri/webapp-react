// importazione file
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";

export default function MovieCard({ movies }) {
    return (
        movies.length ? movies.map(movie => (
            <div className="col-12 col-md-4 gy-3" key={movie.id}>
                <div className="card h-100 vt-bg-color">
                    <img src={movie.imgPath} alt={movie.title} className="w-50 mx-auto"/>
                    <div className="card-body">
                        <h3 className="card-title"><strong>{movie.title}</strong></h3>
                        <p>Regia di <strong>{movie.director}</strong></p>
                        <p>Genere: <strong>{movie.genre}</strong></p>
                        <p>Voto: <StarRating vote={movie.reviews_vote}/></p>
                        <p className="card-text">Trama: <strong>{movie.abstract}</strong></p>
                        <Link to={`/movies/${movie.id}`} className="btn btn-danger">Recensioni</Link>
                    </div>
                </div>
            </div>
        )) : <div className="container"><h1 className="vt-text-color">Elementi non trovati</h1></div>
    )
}