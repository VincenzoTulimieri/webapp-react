// importazione file
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";

export default function MovieCard({ movies }) {
    return (
        movies.length ? movies.map(movie => (
            <div className="col-12 col-md-4 col-lg-3 mb-4" key={movie.id}>
                <Link to={`/movies/${movie.id}`} className="vt-card-link">

                    <div className="vt-movie-card">

                        <img src={movie.imgPath} alt={movie.title} />

                        <div className="vt-overlay">
                            <h5>{movie.title}</h5>
                            <p>{movie.genre}</p>
                            <StarRating vote={movie.reviews_vote}/>
                        </div>

                    </div>

                </Link>
            </div>
        )) : <div className="container"><h1 className="vt-text-color">Elementi non trovati</h1></div>
    )
}