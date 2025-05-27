import { Link } from "react-router-dom";

export default function WelcomePage() {
    return (
        <div className="container vt-container-welcome vt-text-dimension">
            <h1 className="vt-text-color">Ti consigliamo i migliori film da vedere</h1>
            <Link to={'/movies'} className="btn btn-danger">Vai ai film</Link>
        </div>
    )
}