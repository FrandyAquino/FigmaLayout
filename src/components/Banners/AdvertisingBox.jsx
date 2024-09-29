import React from 'react'
import Layout from '@Layout/Layout.jsx'
import Taladro from '@/assets/taladro.png'
import Button from '@components/Buttons/Button'

function AdvertisingBox() {
    return (
        <div className='w-full bg-[#1071FF] mt-16 mb-16'>
            <Layout>
                <div className='flex flex-row items-center justify-between p-2'>
                    <div className='flex items-center gap-4'>
                        <img src={Taladro} alt="Taladro Offer" className='pr-8' />
                        <span className='text-6xl text-white font-bold'>-20%</span>
                        <p className='text-4xl text-white font-bold'>on power tools</p>
                    </div>
                    <Button variant="secondary" state="default" text="Check offer"/>
                </div>
            </Layout>
        </div>
    )
}

export default AdvertisingBox