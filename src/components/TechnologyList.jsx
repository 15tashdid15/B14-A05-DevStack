import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";

function TechnologyList({ onAdd }) {
    return (
        <section className="technology-section">
            <h2>Explore Technologies</h2>

            <div className="technology-grid">
                {technologies.map((technology) => (
                    <TechnologyCard
                        key={technology.id}
                        technology={technology}
                        onAdd={onAdd}
                    />
                ))}
            </div>
        </section>
    );
}

export default TechnologyList;