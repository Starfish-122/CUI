'use client';

import { sidebarCategories } from '@/routes/config';
// import Sidebar from '@/components/modules/Sidebar';

export default function All() {
    return (
        <>
            {/* <Sidebar /> */}
            <h2 className="cui-section__title--h2">ALL</h2>
            <section className="category-overview">
                <h2>사용 가능한 컴포넌트</h2>

                <div className="categories-grid">
                    {sidebarCategories.map((category) => (
                        <div key={category.id} className="category-card">
                            <h3>{category.name}</h3>
                            <ul>
                                {category.items.map((item) => (
                                    <li key={item.path}>
                                        <a href={item.path}>{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
