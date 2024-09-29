import React from 'react';
import Layout from '@Layout/Layout';
import { IoIosArrowDown } from 'react-icons/io';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { PiWarningCircleLight } from "react-icons/pi";
import { FaRegStar } from 'react-icons/fa';
import Typography from '@components/Typography/Typography';
import Button from '@components/Buttons/Button';
import TitleSections from '@components/Typography/TitleSections';

const products = [
    {
        id: 1,
        discount: '-30%',
        title: 'Connection with a handle Omnines round',
        partNumber: 'Omnires | Part No. 2123532',
        price: '$45.00',
        oldPrice: '$65.00',
        stockStatus: 'In stock',
        deliveryDate: '',
        image: '/src/assets/omnires.png',
        bw: '45cm',
        bh: '12cm',
        bd: '35cm',

    },
    {
        id: 2,
        discount: '-15%',
        title: 'Countertop washbasin GoodHome Tekapo',
        partNumber: 'GoodHome | Part No. 234565',
        price: '$51.00',
        oldPrice: '$64.00',
        stockStatus: 'In stock',
        deliveryDate: '',
        image: '/src/assets/countertop.png',
        bw: '45cm',
        bh: '12cm',
        bd: '35cm',

    },
    {
        id: 3,
        discount: '-15%',
        title: 'Perforated Simpson tape 25 x 2500 x 2 mm',
        partNumber: 'GoodHome | Part No. 234565',
        price: '$51.00',
        oldPrice: '$64.00',
        stockStatus: 'In stock',
        deliveryDate: '',
        image: '/src/assets/perforated.png',
        bw: '45cm',
        bh: '12cm',
        bd: '35cm',

    },
    {
        id: 4,
        discount: '-15%',
        title: 'AMBER DECOR Bulb 60W, E27 590',
        partNumber: 'GoodHome | Part No. 234565',
        price: '$51.00',
        oldPrice: '$64.00',
        stockStatus: 'Exp. delivery on Jun 14, 2022',
        deliveryDate: 'Exp. delivery on Jun 14, 2022',
        image: '/src/assets/amberdecor.png',
        bw: '45cm',
        bh: '12cm',
        bd: '35cm',

    },
];

function RecommendProduct() {
    return (
        <div className="pt-14">
            <Layout>
            <TitleSections title="Recommended products" subtitle="Show all recommended products" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="border rounded-lg shadow-lg p-2 relative">
                            <div className='flex justify-between items-center'>
                                <div className=" bg-orange-500 text-white font-semibold rounded-sm px-2 py-1 text-xs">
                                    {product.discount}
                                </div>
                                <div className='text-[#1071FF]'>
                                    <button> <FaRegStar className='text-[#1071FF]' /></button>
                                </div>
                            </div>

                            <div className="relative">
                                <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
                                <p className={`text-sm flex items-center gap-1 absolute bottom-0 font-semibold left-0 p-2 bg-white bg-opacity-70 
                                    ${product.stockStatus === 'In stock' ? 'text-green-500' : 'text-red-500'}`}>
                                    {product.stockStatus === 'In stock' ? (
                                        <IoCheckmarkCircleOutline />
                                    ) : (
                                        <PiWarningCircleLight />
                                    )}
                                    {product.stockStatus}
                                </p>
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="text-sm text-gray-500">{product.partNumber}</p>
                            </div>

                            <div className='pt-1 pb-2'>
                                <Typography variant="h5">{product.title}</Typography>
                                <div className='flex flex-col gap-1 pt-2 pb-2'>
                                    <p>Basin width: {product.bw}</p>
                                    <p>Basin height: {product.bh}</p>
                                    <p>Basin depth: {product.bd}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <p className="text-sm text-blue-500 font-bold flex items-center gap-1">
                                    Your price
                                    <span className="text-blue-500 text-xl font-bold">{product.price}</span> net
                                </p>
                                <p className="text-sm text-[#FF7E27] line-through">{product.oldPrice} not</p>
                            </div>


                            <div className="flex justify-between items-center mt-4 ">
                                <div className="flex items-center justify-center gap-2">
                                    <input type="number" min="1" className="w-1/2 p-3 border rounded-md text-center" defaultValue="1" />
                                    <select className="border rounded-md p-3 w-full">
                                        <option value="item1">Item 1</option>
                                        <option value="item2">Item 2</option>
                                        <option value="item3">Item 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className='pt-2'>
                                <Button text="Add to cart" variant="primary" icon={<IoIosArrowDown />} iconPosition="right" state="defaultWf" />
                            </div>
                        </div>
                    ))}
                </div>
            </Layout>
        </div>
    );
}

export default RecommendProduct;
