function TechnologyCard({ technology, onAdd }) {
    return (
        <div className="technology-card">

            <div className="technology-header">
                <div className="tech-icon">
                    {technology.icon}
                </div>

                <span className="tech-badge">
                    {technology.badge}
                </span>
            </div>

            <h3>{technology.name}</h3>

            <p className="tech-description">
                {technology.description}
            </p>

            <div className="tech-info">
                <span>
                    Category: {technology.category}
                </span>

                <span>
                    Difficulty: {technology.difficulty}
                </span>

                <span>
                    Rating: {"⭐".repeat(technology.rating)}
                </span>
            </div>

            <button
                className="add-button"
                onClick={() => onAdd(technology)}
            >
                Add to Stack
            </button>

        </div>
    );
}

export default TechnologyCard;