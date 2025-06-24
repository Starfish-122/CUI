export default function Home() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">React 뿌시기 🏁</h1>
                </div>
            </section>

            <section className="features-section">
                <h2 className="section-title">테스트</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <span>✨</span>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <span>🚀</span>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <span>🎨</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
