import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '@Layout/Layout'
import Typography from '@components/Typography/Typography';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineCompare, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";


function CategoryNavigation() {
    return (
        <div className='bg-[#F6F8FB] w-full'>
            <Layout>
                <div className='flex justify-between'>
                    <div className='flex py-6 gap-16 flex-row items-center'>
                        <div className='flex items-center gap-1'>
                            <Link to="/CategoryPage"><Typography variant="body-xs-semibold">HOME & GARDEN</Typography></Link>
                            <IoIosArrowDown />
                        </div>
                        <div className='flex items-center gap-1'>

                            <Link to="/Test"><Typography variant="body-xs-semibold">MOTORS</Typography></Link>

                            <IoIosArrowDown />
                        </div>
                        <div>
                            <a href="#"><Typography variant="body-xs-semibold">ELECTRONICS</Typography></a>
                        </div>
                        <div>
                            <a href="#"><Typography variant="body-xs-semibold">OFFICE EQUIPMENT</Typography></a>
                        </div>
                    </div>
                    <div className='flex items-center gap-8 text-[#1071FF]'>
                        <div className='flex flex-col items-center '>
                            <MdOutlineCompare /><Typography variant="body-xs-semibold" color='1071FF'>COMPARE</Typography>
                        </div>
                        <div className='flex flex-col items-center'>
                            <FaRegStar /><Typography variant="body-xs-semibold" color='1071FF'>FAVORITES</Typography>
                        </div>
                        <div className='flex flex-col items-center'>
                            <MdOutlineShoppingCart /><Typography variant="body-xs-semibold" color='1071FF'>CART</Typography>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default CategoryNavigation
