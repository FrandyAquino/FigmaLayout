import React from 'react'
import Layout from '@Layout/Layout.jsx'
import TitleSections from '@components/Typography/TitleSections'

const categories = [
    {
        id: 1,
        img: '/src/assets/photovoltaics.png',
        title: 'Photovoltaics',
    },
    {
        id: 2,
        img: '/src/assets/electronics.png',
        title: 'Electronics',
    },
    {
        id: 3,
        img: '/src/assets/lightsources.png',
        title: 'Light Sources',
    },
    {
        id: 4,
        img: '/src/assets/ventilation.png',
        title: 'Ventilation',
    }

]
function RecommendedCategories() {
    return (
        <div>
            <Layout>
                <TitleSections title="Recommended categories" subtitle="Show all categories" />
                <div className='flex gap-4 pb-10'>
                    {categories.map((category) => (
                        <div key={category.id} className="flex flex- items-center justify-center">
                            <div>
                                <img src={category.img} alt={category.title} className="w-62 h-62 " />
                                <div className='w-full bg-[#1071FF] text-center p-5 rounded-b-lg'>
                                    <span className='text-white text-center font-semibold text-xl'>{category.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Layout>
        </div>
    )
}

export default RecommendedCategories