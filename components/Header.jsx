// importazione file
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-danger py-2 mb-4">
            <div className="container d-flex align-items-center gap-4">
                <div className="vt-container-logo">
                    <Link to={'/movies'}><img src="../logo-grande.png" alt="" className="w-100" /></Link>
                </div>
                <h1 className="vt-text-color vt-text-dimension">Movie time</h1>
            </div>
        </header>
    )
}