import React from 'react'
import Layout from '@Layout/Layout.jsx'
import CategoryTilesImg from '@/assets/categorytiles.png'
import CategoryTilesImg2 from '@/assets/categorytiles2.png'
import CategoryTilesImg3 from '@/assets/categorytiles3.png'
import CategoryTilesImg4 from '@/assets/categorytiles4.png'
import CategoryTilesImg5 from '@/assets/categorytiles5.png'
import CategoryTilesImg6 from '@/assets/categorytiles6.png'

const categories = [
    {
        id: 1,
        img: CategoryTilesImg,
        title: 'Photovoltaics',
        content: 'Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.'
    },
    {
        id: 2,
        img: CategoryTilesImg2,
        title: 'Electronics',
        content: 'Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.'

    },
    {
        id: 3,
        img: CategoryTilesImg3,
        title: 'Light Sources',
        content: 'Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.'

    },
    {
        id: 4,
        img: CategoryTilesImg4,
        title: 'Ventilation',
        content: 'Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.'

    },
    {
        id: 5,
        img: CategoryTilesImg5,
        title: 'Ventilation',
        content: 'Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.'

    },
    {
        id: 6,
        img: CategoryTilesImg6,
        title: 'Ventilation',
        content: 'Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.'

    }
]

function CategoryTile() {
    return (
        <div className='my-10'>
            <Layout>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
                    {categories.map((category) => (
                        <div key={category.id} className="flex flex-col items-center justify-center">
                            <div>
                                <img src={category.img} alt={category.title} className="w-72 h-72 rounded-lg" />
                                <div className='py-2 w-full'>
                                    <span className='text-black font-bold text-md'>{category.title}</span>
                                    <p className='w-[90%]'>{category.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Layout>
        </div>
    )
}

export default CategoryTile;
