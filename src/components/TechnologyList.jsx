import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";

function TechnologyList({ onAdd, stack }) {
    return (
        <section id="technologies" className="technology-section">
            <h2>Explore Technologies</h2>

            <div className="technology-grid">
                {technologies.map((technology) => (
                    <TechnologyCard
                        key={technology.id}
                        technology={technology}
                        onAdd={onAdd}
                        isSelected={stack.some(
                            (item) => item.id === technology.id
                        )}
                    />
                ))}
            </div>
        </section>
    );
}

export default TechnologyList;