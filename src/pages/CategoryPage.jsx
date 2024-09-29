import React from 'react'
import TopNavigationBar from '@components/Controls/TopNavigationBar'
import SearchNavigationBar from '@components/Controls/SearchNavigationBar';
import CategoryNavigation from '@components/Controls/CategoryNavigation';
import Footer from '@components/Controls/Footer';

function CategoryPage() {
    return (
        <div>
            <TopNavigationBar />
            <SearchNavigationBar />
            <CategoryNavigation />
            <Footer />
        </div>
    )
}

export default CategoryPage