export default function StarInput({ value, onChange }) {
    const totalStars = 5

    return (
        <div className="vt-star-input">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1

                return (
                    <button
                        key={starValue}
                        type="button"
                        className="vt-star-btn"
                        onClick={() => onChange(starValue)}
                        aria-label={`Seleziona ${starValue} stelle`}
                    >
                        <i
                            className={
                                starValue <= value
                                    ? "fa-solid fa-star"
                                    : "fa-regular fa-star"
                            }
                        ></i>
                    </button>
                )
            })}
        </div>
    )
}