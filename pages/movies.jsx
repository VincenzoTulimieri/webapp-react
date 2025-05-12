import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

export default function Movies() {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')

    function apiMovies() {
        axios.get('http://127.0.0.1:3000/movies',{
            params:{
                search
            }
        })
            .then(response => {
                setMovies(response.data)
            })
            .catch(err=>consol.log(err))
    }

    useEffect(apiMovies, [])

    function searchMovies(event){
        event.preventDefault()
        apiMovies()
    }

    return (
        <div className="container my-3">
            <h1 className="mb-3 vt-text">Film</h1>
            <section>
                <div className="vt-search">
                    <h2 className="mb-3 vt-text">I migliori Film da vedere</h2>
                    <form className="row g-3" onSubmit={searchMovies}>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Cerca" value={search} onChange={(event)=>setSearch(event.target.value)} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Cerca</button>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <MovieCard movies={movies} />
                </div>
            </section>
        </div>
    )
}