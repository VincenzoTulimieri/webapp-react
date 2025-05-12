import { NavLink } from "react-router-dom";

export default function Header (){
    return(
        <header className="bg-danger py-2 mb-3">
            <div className="container d-flex justify-content-between">
                <div className="vt-container-logo">logooo</div>
                <NavLink to={'/movies'}>Film</NavLink>
            </div>
        </header>
    )
}