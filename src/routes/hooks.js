'use client';

import { useState, useEffect } from 'react';
import { navLinks as defaultNavLinks } from './config';

/**
 * 앱의 네비게이션 링크를 제공하는 커스텀 훅
 * routes/config.js의 중앙 집중식 설정을 사용합니다.
 * @returns {Array} - 네비게이션 링크 객체 배열 [{href, label}]
 */
export function useAppRoutes() {
    // config.js에서 가져온 기본 네비게이션 링크 사용
    const [navLinks, setNavLinks] = useState(defaultNavLinks);

    useEffect(() => {
        // 서버 사이드 렌더링 중에는 실행하지 않음
        if (typeof window === 'undefined') return;

        // 모든 라우트 정보는 config.js에서 관리됨
        // 필요한 경우 여기서 추가적인 동적 라우트 처리 가능
        // 예: 사용자 권한에 따른 메뉴 필터링 등
    }, []);

    return navLinks;
}

export default useAppRoutes;
