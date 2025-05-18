// importazione file
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layout/defaultLayout"
import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"
import GlobalContext from "./contexts/GlobalContext"
import { useState } from "react"

function App() {

  const[isLoader, setIsLoader]= useState(false)

  return (
    <>
      <GlobalContext.Provider value={{isLoader,setIsLoader}}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
            </Route>
            <Route path="*" element={<div><h1>Pagina non trovata</h1></div>} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
