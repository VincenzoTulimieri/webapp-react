// importazione file
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layout/defaultLayout"
import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"
import GlobalContext from "./contexts/GlobalContext"
import { useState } from "react"
import AddNewMovies from "./pages/AddNewMovie"
import WelcomePage from "./pages/WelcomePage"

function App() {

  const [isLoader, setIsLoader] = useState(false)

  return (
    <>
      <GlobalContext.Provider value={{ isLoader, setIsLoader }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/add-movie" element={<AddNewMovies />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
            </Route>
            <Route path="*" element={<div className="container"><h1 className="vt-text-color">Pagina non trovata</h1></div>} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
