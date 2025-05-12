export default function SearchComponent({search, setSearch, searchMovies}) {
    return (
        <form className="row g-3" onSubmit={searchMovies}>
            <div className="col-auto">
                <input type="text" className="form-control" placeholder="Cerca" value={search} onChange={(event) => setSearch(event.target.value)} />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Cerca</button>
            </div>
        </form>
    )
}