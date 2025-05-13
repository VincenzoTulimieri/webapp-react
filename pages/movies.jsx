// importazione file
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import SearchComponent from "../components/searchComponent";

export default function Movies() {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')

    function getMovies() {
        axios.get('http://127.0.0.1:3000/movies', {
            params:{
                search
            }
        })
            .then(response => {
                setMovies(response.data)
            })
            .catch(err=>console.log(err))
    }

    useEffect(getMovies, [])

    function searchMovies(event){
        event.preventDefault()
        getMovies()
    }

    return (
        <div className="container my-3">
            <section>
                <div className="vt-search">
                    <h2 className="mb-3 vt-text-color vt-text-dimension">I migliori Film da vedere</h2>
                    <SearchComponent search={search} setSearch={setSearch} searchMovies={searchMovies}/>
                </div>
                <div className="row">
                    <MovieCard movies={movies} />
                </div>
            </section>
        </div>
    )
}