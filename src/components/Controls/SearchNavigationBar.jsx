import React from 'react'
import Layout from '@Layout/Layout'
import { Link } from 'react-router-dom'
import Typography from '@components/Typography/Typography'
import InputSearch from '@components/Search/InputSeach'
import Button from '@components/Buttons/Button'

function SearchNavigationBar() {
    return (
        <div>
            <Layout>
                <div className='py-4 flex justify-between'>
                    <Link to="/"><Typography variant="body-lg-semibold" color="text-black">Commerce</Typography></Link>
                    <InputSearch variant='default' />
                    <Button text="Quick Order Form" variant="primary" state="default" />
                </div>
            </Layout>
        </div>
    )
}

export default SearchNavigationBar

