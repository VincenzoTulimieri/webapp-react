// importazione file
import StarRating from "../components/StarRating";

export default function ReviewsCard({ data }) {
    const { name, vote, text } = data;

    return (
        <div className="vt-review-card">
            <div className="vt-review-header">
                <div className="vt-user">
                    <div className="vt-avatar">
                        {name.charAt(0).toUpperCase()}
                    </div>
                    <h5 className="vt-review-name">{name}</h5>
                </div>

                <div className="vt-review-stars">
                    <StarRating vote={vote} />
                </div>
            </div>

            <p className="vt-review-text">{text}</p>
        </div>
    );
}
