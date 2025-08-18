#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 마이그레이션할 파일 목록
const filesToMigrate = [
    // Base components
    'src/components/base/radio/Radio.js',
    'src/components/base/switch/Switch.js',
    'src/components/base/icon/Icon.js',

    // Common components
    'src/components/common/labelRadio/LabelRadio.js',

    // Template components
    'src/components/templates/Header/Header.js',
    'src/components/templates/Footer/Footer.js',
    'src/components/templates/Sidebar/Sidebar.js',
    'src/components/templates/Main/Main.js',
    'src/components/templates/QuickNav/QuickNav.js',
    'src/components/templates/ClientLayout.js',
    'src/components/templates/UILayout/UILayout.js',
    'src/components/templates/Guide/index.js',
    'src/components/templates/Guide/ColorSection.js',
    'src/components/templates/Guide/StyleSection.js',
    'src/components/templates/Guide/TextSection.js',
    'src/components/templates/Guide/UISection.js',

    // Utils components
    'src/components/utils/CodeBlock/CodeBlock.js',
    'src/components/utils/CopyButton/CopyButton.js',
    'src/components/utils/PropsTable/PropsTable.js',
    'src/components/utils/SectionTitle/index.js',
    'src/components/utils/UIStyles/index.js',
    'src/components/utils/Playground/ColorPalette.js',
    'src/components/utils/Playground/ColorPicker.js',
    'src/components/utils/Playground/Frame.js',

    // App pages
    'src/app/page.js',
    'src/app/layout.js',
    'src/app/not-found.js',
    'src/app/(pages)/layout.js',
    'src/app/(pages)/guide/page.js',
    'src/app/(ui)/layout.js',
    'src/app/(ui)/all/page.js',
    'src/app/(ui)/button/page.js',
    'src/app/(ui)/button/Playground.js',
    'src/app/(ui)/checkbox/page.js',
    'src/app/(ui)/checkbox/Playground.js',
    'src/app/(ui)/radio/page.js',
    'src/app/(ui)/radio/Playground.js',
    'src/app/(ui)/search-bar/page.js',
    'src/app/(ui)/switch/page.js',
    'src/app/(ui)/switch/Playground.js',

    // Routes
    'src/routes/config.js',
    'src/routes/hooks.js',
    'src/routes/index.js',
    'src/routes/utils.js',

    // Styles
    'src/styles/globalStyles.js',
    'src/styles/mixins.js',
    'src/styles/theme.js',
    'src/styles/utils.js',

    // Lib
    'src/lib/registry.js',
];

// 파일 확장자 변경 함수
function changeExtension(filePath, newExt) {
    const dir = path.dirname(filePath);
    const basename = path.basename(filePath, path.extname(filePath));
    return path.join(dir, basename + newExt);
}

// 파일이 존재하는지 확인
function fileExists(filePath) {
    return fs.existsSync(filePath);
}

// 마이그레이션 실행
function migrateFile(filePath) {
    if (!fileExists(filePath)) {
        console.log(`⚠️  파일이 존재하지 않습니다: ${filePath}`);
        return;
    }

    const tsPath = changeExtension(filePath, '.tsx');
    const tsIndexPath = changeExtension(filePath, '.ts');

    try {
        // .js 파일을 .tsx로 복사
        if (
            filePath.includes('index.js') ||
            filePath.includes('config.js') ||
            filePath.includes('utils.js') ||
            filePath.includes('hooks.js')
        ) {
            fs.copyFileSync(filePath, tsIndexPath);
            console.log(`✅ ${filePath} → ${tsIndexPath}`);
        } else {
            fs.copyFileSync(filePath, tsPath);
            console.log(`✅ ${filePath} → ${tsPath}`);
        }
    } catch (error) {
        console.error(`❌ ${filePath} 마이그레이션 실패:`, error.message);
    }
}

// 메인 실행
console.log('🚀 TypeScript 마이그레이션을 시작합니다...\n');

filesToMigrate.forEach((file) => {
    migrateFile(file);
});

console.log('\n📝 다음 단계:');
console.log('1. 각 .tsx 파일에 타입 정의 추가');
console.log('2. import/export 문 업데이트');
console.log('3. 타입 체크 실행: npm run type-check');
console.log('4. 빌드 테스트: npm run build');
