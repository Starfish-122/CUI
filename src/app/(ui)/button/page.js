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
                    <Button variant="text" href="/button">
                        Link
                    </Button>
                </div>
                <h3 className="cui-section__title--h3">버튼 크기</h3>
                <div className="cui-section__content">
                    <Button size="sm">작음</Button>
                    <Button size="md">중간임</Button>
                    <Button size="lg">커버림</Button>
                </div>
                <h3 className="cui-section__title--h3">버튼 옵션</h3>
                <div className="cui-section__content">
                    <Button fullWidth>풀로다가 쓰는 버튼</Button>
                    <Button disabled>
                        <span>비활성화</span>
                    </Button>
                    <Button icon="⚙️">
                        <span>이것은 설정</span>
                    </Button>
                </div>
                <h3 className="cui-section__title--h3">커스텀 색상 버튼</h3>
                <div className="cui-section__content">
                    <Button bgColor="#FF5733" textColor="white">
                        커스텀 색상 버튼
                    </Button>

                    <Button variant="outline" bgColor="#9C27B0" textColor="#FFFFFF">
                        커스텀 색상 우선 적용
                    </Button>
                </div>
            </div>
        </>
    );
}
