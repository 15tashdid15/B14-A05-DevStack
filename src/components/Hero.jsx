function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>
                    Build Your <span>Perfect Dev Stack</span>
                </h1>

                <p>
                    Explore modern development technologies and create your own
                    personalized technology stack.
                </p>

                <div className="hero-buttons">
                    <button>Explore Technologies</button>
                    <button>Learn More</button>
                </div>
            </div>

            <div className="hero-image">
                <img src="/src/assets/banner-stack.png" alt="Developer Stack" />
            </div>
        </section>
    );
}

export default Hero;