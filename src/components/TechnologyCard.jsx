function TechnologyCard({ technology, onAdd }) {
    return (
        <div className="technology-card">
            <div className="tech-icon">
                {technology.icon}
            </div>

            <span className="tech-badge">
                {technology.badge}
            </span>

            <h3>{technology.name}</h3>

            <p>{technology.description}</p>

            <p>
                Category: {technology.category}
            </p>

            <p>
                Difficulty: {technology.difficulty}
            </p>

            <p>
                Rating: {"⭐".repeat(technology.rating)}
            </p>

            <button onClick={() => onAdd(technology)}>
                Add to Stack
            </button>
        </div>
    );
}

export default TechnologyCard;