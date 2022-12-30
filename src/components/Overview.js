import React from 'react';
import Card from './Card';

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card>
        <span className='absolute left-4 top-2 text-gray-500 text-lg xl:text-xl 2xl:text-2xl'>{symbol}</span>
        <div className='w-full h-full flex items-center justify-around'>
            <span className='flex items-center xl:text-4l 2xl:text-5xl'>
                ${price}
                <span className='text-lg xl:text-xl 2xl:text-2xl m-2'>
                    {currency}
                </span>
            </span>
            <span className={`text-lg xl:text-xl 2xl:text-2xl 
                ${change > 0 
                    ? "text-lime-500" 
                    : "text-rose-600"}
                `}>
                ${change} <span>({changePercent}%)</span>
            </span>
        </div>
    </Card>
  );
};

export default Overview;