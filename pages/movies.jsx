import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

export default function Movies (){

    const [movies, setMovies]= useState([])

    function apiMovies(){
        axios.get('http://127.0.0.1:3000/movies')
            .then(response =>{
                setMovies(response.data)
            })
    }

    useEffect(apiMovies,[])

    return(
        <div className="container my-3">
            <h1 className="mb-3 vt-text">Film</h1>
            <section>
                <h2 className="mb-3 vt-text">I migliori Film da vedere</h2>
                <div className="row">
                    <MovieCard movies={movies}/>
                </div>
            </section>
        </div>
    )
}