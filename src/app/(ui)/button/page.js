import Button from '@/components/base/button/Button';

export default function button() {
    return (
        <>
            <h2 className="cui-section__title--h2">Button 컴포넌트 데모</h2>

            <div className="cui-section__content">
                <h3 className="cui-section__title--h3">버튼 변형</h3>
                <div className="cui-section__content">
                    <Button>기본 버튼</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                </div>
            </div>
        </>
    );
}
