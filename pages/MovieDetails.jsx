// importazione file
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewsCard from "../components/ReviewsCard";
import StarRating from "../components/StarRating";

export default function MovieDetails(){

    const {id} = useParams()
    const [movie, setMovie] = useState([])

    function getMovie() {
        axios.get(`http://127.0.0.1:3000/movies/${id}`)
            .then(response => {
                setMovie(response.data)
            })
            .catch(err=>console.log(err))
    }

    useEffect(getMovie, [id])

    return(
        <article className="container">
            <header className="d-flex gap-4 mb-3">
                <div className="vt-container-img">
                    <img src={movie?.imgPath} alt={movie?.title} />
                </div>
                <div>
                    <h1 className="vt-text-color vt-text-dimension">{movie?.title}</h1>
                    <p className="vt-text-color">Regia: <strong>{movie?.director}</strong></p>
                    <p className="vt-text-color">{movie?.abstract}</p>
                </div>
            </header>
            <section>
                <div className="mb-2 vt-flex">
                    <h4 className="vt-text-color">Le migliori Recensioni</h4>
                    <p className="vt-text-color">{movie.reviews_vote} <StarRating /> </p>
                </div>
                {movie.reviews?.map(review =><ReviewsCard key={review.id} data={review} />)}
            </section>
        </article>
        
    )
}