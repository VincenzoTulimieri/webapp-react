export default function SearchComponent({ search, setSearch, searchMovies }) {
    return (
        <form className="vt-search-form" onSubmit={searchMovies}>
            <div className="vt-search-wrapper">
                <input
                    type="text"
                    placeholder="Cerca un film..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <button type="submit">
                    Cerca
                </button>
            </div>
        </form>
    )
}