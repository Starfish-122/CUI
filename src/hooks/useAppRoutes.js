'use client';

import { useState, useEffect } from 'react';
import { generateNavLinks } from '@/utils/navigation';

/**
 * app 폴더의 라우트를 가져와 네비게이션 링크로 변환하는 커스텀 훅
 * @returns {Array} - 네비게이션 링크 객체 배열 [{href, label}]
 */
export function useAppRoutes() {
    const [navLinks, setNavLinks] = useState([
        { href: '/', label: 'Home' },
        { href: '/button', label: 'Button' }, // 기본값으로 현재 존재하는 라우트 설정
    ]);

    useEffect(() => {
        // 서버 사이드 렌더링 중에는 실행하지 않음
        if (typeof window === 'undefined') return;

        async function fetchRoutes() {
            try {
                // 라우트 정보를 가져오는 API 엔드포인트 호출
                const response = await fetch('/api/routes');
                if (!response.ok) throw new Error('Failed to fetch routes');

                const { routes } = await response.json();
                const links = generateNavLinks(routes);
                setNavLinks(links);
            } catch (error) {
                console.error('Error fetching routes:', error);
                // 오류 발생 시 기본 네비게이션 링크 유지
            }
        }

        fetchRoutes();
    }, []);

    return navLinks;
}

export default useAppRoutes;
