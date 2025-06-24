import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

/**
 * app 폴더의 라우트 정보를 제공하는 API 엔드포인트
 * @returns {Object} - app 폴더 내의 라우트 목록
 */
export async function GET() {
    try {
        // app 폴더 경로
        const appDirectory = path.join(process.cwd(), 'src', 'app');

        // app 폴더 내의 파일 및 폴더 목록 가져오기
        const items = fs.readdirSync(appDirectory);

        // 라우트 목록 초기화
        let routes = [];

        // 폴더만 필터링하고 라우트 그룹 처리
        items.forEach((item) => {
            const itemPath = path.join(appDirectory, item);

            // 디렉토리인지 확인
            if (fs.statSync(itemPath).isDirectory()) {
                // 라우트 그룹인 경우 (괄호로 감싸진 폴더)
                if (item.startsWith('(') && item.endsWith(')')) {
                    // 라우트 그룹 내의 폴더들을 가져옴
                    const groupItems = fs.readdirSync(itemPath);

                    // 그룹 내의 각 폴더를 라우트로 추가
                    groupItems.forEach((groupItem) => {
                        const groupItemPath = path.join(itemPath, groupItem);
                        if (fs.statSync(groupItemPath).isDirectory()) {
                            routes.push(groupItem);
                        }
                    });
                } else {
                    // 일반 라우트
                    routes.push(item);
                }
            }
        });

        return NextResponse.json({ routes }, { status: 200 });
    } catch (error) {
        console.error('Error getting routes:', error);
        return NextResponse.json({ error: 'Failed to get routes' }, { status: 500 });
    }
}
