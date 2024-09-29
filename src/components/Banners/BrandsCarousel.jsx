import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Layout from '@Layout/Layout';
import TitleSections from '../Typography/TitleSections';

const brands = [
    { name: 'SHARP', logo: '/src/assets/sharp.png' },
    { name: 'Panasonic', logo: '/src/assets/panasonic.png' },
    { name: 'HUAWEI', logo: '/src/assets/huawei.png' },
    { name: 'Legrand', logo: '/src/assets/legrand.png' }
];

function BrandsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + brands.length) % brands.length);
    };

    const visibleBrands = [
        brands[currentIndex],
        brands[(currentIndex + 1) % brands.length],
        brands[(currentIndex + 2) % brands.length],
        brands[(currentIndex + 3) % brands.length]
    ];

    return (
        <Layout>
            <div className='pt-10 pb-4'>
                <TitleSections title="Our brands" subtitle="Show all brands" />
            </div>
            <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
                <div className="flex items-center justify-center gap-8 transition-transform duration-300">
                    {visibleBrands.map((brand, index) => (
                        <div key={index} className="min-w-[300px] flex items-center justify-center p-4">
                            <img src={brand.logo} alt={brand.name} className="object-contain h-16" />
                        </div>
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-[40%] transform -translate-y-1/2 bg-[#E6EFFB] w-10 h-10 flex items-center justify-center rounded-md shadow-md">
                    <IoIosArrowBack />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-[40%] transform -translate-y-1/2 bg-[#E6EFFB] w-10 h-10 flex items-center justify-center rounded-md shadow-md">
                    <IoIosArrowForward />
                </button>

                <div className="flex justify-center mt-4">
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 mx-1 rounded-full ${index === currentIndex % 3 ? 'bg-blue-500' : 'bg-gray-300'}`}
                        ></div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default BrandsCarousel;
