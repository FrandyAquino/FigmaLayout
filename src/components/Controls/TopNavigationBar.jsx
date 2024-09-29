import React, { useState } from 'react';
import { IoIosArrowDown, IoMdCall } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Layout from '@Layout/Layout';

function TopNavigationBar() {
    const [dropdown, setDropdown] = useState(null);

    const handleDropdownToggle = (dropdownName) => {
        setDropdown(dropdown === dropdownName ? null : dropdownName);
    };

    return (
        <nav className='bg-[#F6F8FB]'>
            <Layout>
                <div className='flex flex-row justify-between text-sm'>
                    <div className='flex flex-row gap-5 py-4'>
                        <div className='relative'>
                            <button
                                onClick={() => handleDropdownToggle('country')}
                                className='flex items-center gap-2 '>
                                <span>Country: Sweden</span>
                                <IoIosArrowDown />
                            </button>
                            {dropdown === 'country' && (
                                <ul className='absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-48'>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Sweden</li>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Denmark</li>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Norway</li>
                                </ul>
                            )}
                        </div>
                        <div className='relative'>
                            <button
                                onClick={() => handleDropdownToggle('language')}
                                className='flex items-center gap-2'>
                                <span>Language: Svenska</span>
                                <IoIosArrowDown />
                            </button>
                            {dropdown === 'language' && (
                                <ul className='absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-48'>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Svenska</li>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>English</li>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Deutsch</li>
                                </ul>
                            )}
                        </div>
                        <div className='relative'>
                            <button
                                onClick={() => handleDropdownToggle('currency')}
                                className='flex items-center gap-2'>
                                <span>Currency: $</span>
                                <IoIosArrowDown />
                            </button>
                            {dropdown === 'currency' && (
                                <ul className='absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-48'>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>$</li>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>€</li>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>£</li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 py-4'>
                        <ul className='flex items-center gap-2 pr-4 border-r border-black'>
                            <IoMdCall className='transform -scale-x-100 text-[#1071FF]' />
                            <li className='text-[#1071FF]'>
                                +32 (0) 15 28 76 67
                            </li>
                        </ul>
                        <ul className='flex items-center gap-2'>
                            <MdOutlineMail /> <li>Messages</li>
                        </ul>
                        <div className='relative'>
                            <button
                                onClick={() => handleDropdownToggle('user')}
                                className='flex items-center gap-2 '>
                                <FaRegUserCircle />
                                <span>Username Surname</span>
                                <IoIosArrowDown />
                            </button>
                            {dropdown === 'user' && (
                                <ul className='absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-48'>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Profile</li>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Settings</li>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Logout</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        </nav>
    );
}

export default TopNavigationBar;
