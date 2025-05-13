import { Link } from "react-router-dom"

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
                        <p className="card-text">Trama: <strong>{movie.abstract}</strong></p>
                        <Link to={`/movies/${movie.id}`} className="btn btn-primary">Dettagli</Link>
                    </div>
                </div>
            </div>
        )) : <div className="vt-text-color">Elementi non trovati</div>
    )
}