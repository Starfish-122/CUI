import { routePaths } from './config';

/**
 * app 폴더의 라우트 정보를 제공하는 API 로직
 * routes/config.js에서 중앙 집중식으로 관리되는 라우트 정보를 사용합니다.
 * @returns {Object} - app 폴더 내의 라우트 목록
 */
export function getRoutes() {
    try {
        // config.js에서 정의된 라우트 경로 사용
        return { routes: routePaths };
    } catch (error) {
        console.error('Error getting routes:', error);
        return { error: 'Failed to get routes' };
    }
}
