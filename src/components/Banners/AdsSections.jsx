import React from 'react'
import Layout from '@Layout/Layout'
import SectionAds from '@/assets/adsection1.png'
import SectionAds2 from '@/assets/adsection2.png'
import SectionAds3 from '@/assets/adsection3.png'
import Typography from '@components/Typography/Typography';

const addSections = [
    {
        id: 1,
        title: 'New tool kits!',
        image: SectionAds,
    },
    {
        id: 2,
        title: 'New rules for wind farms',
        image: SectionAds2,
    },
    {
        id: 3,
        title: 'New Iphone now available!',
        image: SectionAds3,
    },

]

function AdsSections() {
    return (
        <div className='py-16'>
            <Layout>
                <div className='flex flex-wrap justify-between'>
                    {addSections.map((add) => (
                        <div key={add.id} >
                            <div className='flex w-[408px] h-[230px]'>
                                <div className='bg-[#FF7E27] text-white flex items-center justify-center p-7 h-full w-full rounded-s-lg'>
                                    <span className='w-28'><Typography variant="h6" color="white">{add.title}</Typography></span>
                                </div>
                                <div className='w-full'>
                                    <img src={add.image} alt="Anuncios Personalizados" className='w-full h-full' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Layout>
        </div>
    )
}

export default AdsSections