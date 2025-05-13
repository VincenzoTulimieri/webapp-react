export default function StarRating({ vote }) {
    const maxValue = 5;

    return (
        [...Array(maxValue)].map((value, index) => index < vote ? <i key={index} className="fa-solid fa-star text-warning"></i> : <i key={index} className="fa-regular fa-star text-warning"></i>)
    )
}