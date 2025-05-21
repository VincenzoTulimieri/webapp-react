// importazione file
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import SearchComponent from "../components/searchComponent";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { Link } from "react-router-dom";

export default function Movies() {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const { setIsLoader } = useContext(GlobalContext)

    function getMovies() {
        setIsLoader(true)
        axios.get('http://127.0.0.1:3000/movies', {
            params: {
                search
            }
        })
            .then(response => {
                setMovies(response.data)

            })
            .catch(err => console.log(err))
            .finally(() => setIsLoader(false))
    }

    useEffect(getMovies, [])

    function searchMovies(event) {
        event.preventDefault()
        getMovies()
    }

    return (
        <section className="container my-3">
            <div className="vt-flex">
                <h2 className="mb-3 vt-text-color vt-text-dimension">I migliori Film da vedere</h2>
                <div>
                    <div className="vt-flex-container mb-3">
                        <h4 className="vt-text-color">Aggiungi Film:</h4>
                        <Link className="vt-text-color btn btn-danger" to={'/add-movie'} ><i className="fa-solid fa-plus"></i></Link>
                    </div>
                    <SearchComponent search={search} setSearch={setSearch} searchMovies={searchMovies} />
                </div>
            </div>
            <div className="row">
                <MovieCard movies={movies} />
            </div>
        </section>
    )
}