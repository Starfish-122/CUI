import { NextResponse } from 'next/server';
import { getRoutes } from '@/routes/api';

/**
 * app 폴더의 라우트 정보를 제공하는 API 엔드포인트
 * routes/api.js에서 제공하는 함수를 사용하여 라우트 정보를 반환합니다.
 * @returns {Object} - app 폴더 내의 라우트 목록
 */
export async function GET() {
    try {
        const result = getRoutes();

        if (result.error) {
            return NextResponse.json({ error: result.error }, { status: 500 });
        }

        return NextResponse.json({ routes: result.routes }, { status: 200 });
    } catch (error) {
        console.error('Error in routes API:', error);
        return NextResponse.json({ error: 'Failed to get routes' }, { status: 500 });
    }
}
