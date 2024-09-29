import React from 'react'
import TopNavigationBar from '@components/Controls/TopNavigationBar'
import SearchNavigationBar from '@components/Controls/SearchNavigationBar'
import CategoryNavigation from '@components/Controls/CategoryNavigation'
import BrandsCarousel from '@components/Banners/BrandsCarousel'
import RecommendProduct from '@components/ProductPage/RecommendProduct'
import AdvertisingBox from '@components/Banners/AdvertisingBox'
import RecommendedCategories from '@components/Banners/RecommendedCategories'
import ArticleSections from '@components/Banners/ArticleSections'
import PersonalizedAdd from '@components/Banners/PersonalizedAdd'
import AdsSections from '@components/Banners/AdsSections'
import HeroBanner from '@components/Banners/HeroBanner'
import EventsSection from '@components/Banners/EventsSection'
import Footer from '@components/Controls/Footer'

function HomePage() {
    return (
        <div>
            <TopNavigationBar />
            <SearchNavigationBar />
            <CategoryNavigation />
            <BrandsCarousel />
            <RecommendProduct />
            <AdvertisingBox />
            <RecommendedCategories />
            <ArticleSections />
            <PersonalizedAdd />
            <AdsSections />
            <HeroBanner />
            <EventsSection/>
            <Footer/>
        </div>
    )
}

export default HomePage