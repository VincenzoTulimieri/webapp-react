// importazione file
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewsCard from "../components/ReviewsCard";
import StarRating from "../components/StarRating";
import FormReviews from "../components/FormReviews";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function MovieDetails(){

    const {id} = useParams()
    const navigate = useNavigate()
    const [movie, setMovie] = useState([])
    const {setIsLoader}= useContext(GlobalContext)

    function getMovie() {
        setIsLoader(true)
        axios.get(`http://127.0.0.1:3000/movies/${id}`)
            .then(response => {
                setMovie(response.data)
            })
            .catch(err=>console.log(err))
            .finally(()=>setIsLoader(false))
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
                    <p className="vt-text-color"><StarRating vote={movie?.reviews_vote}/></p>
                </div>
                {movie.reviews?.length ? movie.reviews.map(review =><ReviewsCard key={review.id} data={review} />) : <div><h1 className="vt-text-color">Nessuna recensione trovata</h1></div>}
            </section>
            <section className="mb-3">
                <FormReviews id={id} getMovie={getMovie}/>
            </section>
            <button className="btn btn-danger" onClick={()=> navigate(-1)}><i className="fa-solid fa-chevron-left"></i> Pagina Precedente</button>
        </article>
        
    )
}