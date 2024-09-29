import React from 'react'
import Layout from '@Layout/Layout.jsx'
import Typography from '@components/Typography/Typography.jsx';
import Button from '@components/Buttons/Button.jsx';
import HeroBannerImg from '@/assets/herobanner.png'

function HeroBanner() {
    return (
        <div className='w-full bg-[#F6F8FB]'>
            <Layout>
                <div className='flex py-7 justify-between'>
                    <div className='flex flex-col items-start pt-12 gap-7'>
                        <Typography variant="h3" color="white">DPD delivery already available!</Typography>
                        <span className='w-[365px]'> <Typography variant="body-sm" color="white">Choose DPD for speed, ease and convenience. Track your parcel in real time. This will help you plan your work while waiting for the parcel.</Typography></span>
                        <Button variant="primary" state="default" text="Show more" className="w-auto" />
                    </div>
                    <div>
                        <img src={HeroBannerImg} alt="Hero Banner" />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default HeroBanner