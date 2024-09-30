import React from 'react'
import TopNavigationBar from '@components/Controls/TopNavigationBar'
import SearchNavigationBar from '@components/Controls/SearchNavigationBar';
import CategoryNavigation from '@components/Controls/CategoryNavigation';
import Footer from '@components/Controls/Footer';
import CategoryDescription from '@components/Category/CategoryDescription';
import Breadcrumbs from '@components/Controls/Breadcrumbs';
import CategoryTile from '@components/Category/CategoryTile';

function CategoryPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <TopNavigationBar />
                <SearchNavigationBar />
                <CategoryNavigation />
                <Breadcrumbs />
                <CategoryDescription />
                <CategoryTile  />
            </div>
            <Footer />
        </div>
    );
}

export default CategoryPage;
