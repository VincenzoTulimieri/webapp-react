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
        <section className="container my-4">
            <div className="vt-movies-header">
                <div className="vt-movies-header-text">
                    <h1 className="vt-page-title">Movie Collection</h1>
                    <p className="vt-page-subtitle">
                        Scopri i migliori film, leggi recensioni e aggiungi i tuoi preferiti.
                    </p>
                </div>

                <div className="vt-movies-header-actions">
                    <Link className="vt-add-movie-btn" to={'/add-movie'}>
                        <i className="fa-solid fa-plus"></i> Aggiungi Film
                    </Link>

                    <SearchComponent
                        search={search}
                        setSearch={setSearch}
                        searchMovies={searchMovies}
                    />
                </div>
            </div>

            <div className="row g-4">
                <MovieCard movies={movies} />
            </div>
        </section>
    )
}