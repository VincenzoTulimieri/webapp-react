import { Link } from "react-router-dom";

export default function WelcomePage() {
    return (
        <section className="vt-hero">
            <div className="vt-hero-overlay"></div>

            <div className="container vt-hero-content">
                <span className="vt-hero-kicker">Movie Time</span>

                <h1 className="vt-hero-title">
                    Scopri i film da non perdere
                </h1>

                <p className="vt-hero-subtitle">
                    Esplora una raccolta di film consigliati, leggi le recensioni
                    degli utenti e aggiungi i tuoi titoli preferiti.
                </p>

                <div className="vt-hero-actions">
                    <Link to="/movies" className="vt-hero-btn-primary">
                        Esplora i film
                    </Link>

                    <Link to="/add-movie" className="vt-hero-btn-secondary">
                        Aggiungi un film
                    </Link>
                </div>
            </div>
        </section>
    )
}