import '@/styles/pages/home.scss';

export default function Home() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">React 뿌시기 🏁</h1>
                    <p>
                        폴더 구조를 제외한 마크업/스타일링은 예시입니다.
                        <br /> 참고용으로 사용해주세요.
                    </p>
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
