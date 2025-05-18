import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Loader from "../components/Loader";

export default function DefaultLayout (){
    const {isLoader}= useContext(GlobalContext)
    return(
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        {isLoader && <Loader />}
        </>
    )
}