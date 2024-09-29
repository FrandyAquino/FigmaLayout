import React from 'react'
import Layout from '@Layout/Layout.jsx'
import AddsPersonalized from '@/assets/personalizedadds.png'
import Typography from '@components/Typography/Typography';
import Button from '@components/Buttons/Button';

function PersonalizedAdd() {
    return (
        <div className='pt-10'>
            <Layout>
                <div className='flex gap-4'>
                    <img src={AddsPersonalized} alt="Anuncios Personalizados"
                        className='w-1/2 h-72'
                    />
                    <div className='w-1/2'>
                        <div className='bg-[#1071FF] rounded-lg w-full h-72 p-16 text-white'>
                            <Typography variant="h4" color="white">Buy this bundle and save $100!</Typography>
                            <p className='w-64 py-6 font-light'>Longer sentence, for just two lines and it could be very very long</p>
                            <Button text="Buy this bundle" variant="secondary" state="default" />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default PersonalizedAdd