import React from 'react';
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Layout from '@Layout/Layout';

const Footer = () => {
    return (
        <div className='bg-[#F6F8FB] w-full'>
            <Layout>
                <footer className="bg-[#F6F8FB] pt-10 ">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div>
                            <h3 className="font-bold text-lg mb-4">Sign up for news</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Keep up to date with the latest product launches and news. Find out more about our brands and get special promo codes.
                            </p>
                            <input
                                type="email"
                                placeholder="Your e-mail address"
                                className="w-full p-3 border border-gray-300 rounded mb-4"
                            />
                            <button className="w-full bg-[#1071FF] text-white p-3 rounded-md">
                                Sign up for newsletter
                            </button>
                            <div className="mt-4 flex items-start">
                                <input type="checkbox" className="mr-2 mt-1" />
                                <p className="text-sm text-gray-600">
                                    I accept the <a href="#" className="text-blue-500">personal data management</a>.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">How to buy</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#">Payment methods</a></li>
                                <li><a href="#">Order and pick up</a></li>
                                <li><a href="#">Order with delivery</a></li>
                                <li><a href="#">Shopping over the phone</a></li>
                                <li><a href="#">Returns</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">Help</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Online Help</a></li>
                                <li><a href="#">Our Commitments</a></li>
                                <li><a href="#">Give feedback</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">Services</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#">Transport</a></li>
                                <li><a href="#">Design service</a></li>
                                <li><a href="#">Paint and plaster mixing service</a></li>
                                <li><a href="#">Dimensioning and assembly service</a></li>
                                <li><a href="#">Return of used equipment</a></li>
                                <li><a href="#">Additional services</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">About</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Press Office</a></li>
                                <li><a href="#">For suppliers</a></li>
                                <li><a href="#">Regulations</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Cookies</a></li>
                                <li><a href="#">Personal Data Request</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 border-t py-4">
                        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-600">
                            <p>© 2021 Divante S.A.</p>
                            <div className="flex space-x-4">
                                <a href="#"><BsFacebook className='w-5 h-auto'/></a>
                                <a href="#"><BiLogoInstagramAlt className='w-5 h-auto'/></a>
                                <a href="#"><BsYoutube className='w-5 h-auto'/></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </Layout>
        </div>
    );
}

export default Footer;
