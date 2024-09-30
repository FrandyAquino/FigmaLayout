import React, { useState } from 'react'
import Typography from '@components/Typography/Typography';
import Layout from '@Layout/Layout'

function CategoryDescription() {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div>
            <Layout>
                <div className='my-2'>
                    <Typography variant="h2">
                        Home & Garden
                    </Typography>
                </div>
                <p className='w-[800px]'>
                    Single row angular contact bearings are capable of taking radial loads,
                    as well as axial loads in one direction. They are able to transmit radial
                    and axial forces simultaneously. These bearings are an excellent choice
                    for high speed,
                    <br />
                    <span
                        className={`transition-opacity duration-75 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-30 '}`}>
                        low load applications. They have a low coefficient of friction
                        and run quietly.
                    </span>
                    &nbsp;
                    <span
                        className={`transition-max-height duration-500 ease-in-out ${isExpanded ? 'inline max-h-full opacity-100' : 'hidden max-h-0 opacity-0 overflow-hidden'}`}>
                        By coupling together suitable bearings, either back-to-back,
                        face-to-face or in a tandem arrangement, dual axial load carrying capability
                        can be achieved.
                    </span>
                </p>
                <ul
                    className={`pl-5 list-disc ${isExpanded ? 'max-h-full opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <li>Relatively high load carrying capacity</li>
                    <li>Rapid acceleration/deceleration</li>
                    <li>Easy mounting of universally matched bearings</li>
                </ul>
                <span
                    onClick={toggleExpand}
                    className={`text-blue-500 font-bold transition-all ease-in-out cursor-pointer `}>
                    {isExpanded ? "Show less" : "Show more"}
                </span>
            </Layout>

        </div>
    )
}

export default CategoryDescription;
