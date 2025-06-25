import Link from 'next/link';

export default function NotFound() {
    return (
        <div
            className="not-found-container"
            style={{
                padding: '2rem',
                maxWidth: '600px',
                margin: '0 auto',
                textAlign: 'center',
            }}
        >
            <h2
                style={{
                    fontSize: '2rem',
                    marginBottom: '1rem',
                    color: 'var(--brand-primary, #3b82f6)',
                }}
            >
                404 - 페이지를 찾을 수 없습니다
            </h2>

            <p style={{ marginBottom: '2rem' }}>
                요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            </p>

            <Link
                href="/"
                style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-primary, #3b82f6)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.25rem',
                    textDecoration: 'none',
                }}
            >
                홈으로 돌아가기
            </Link>
        </div>
    );
}
