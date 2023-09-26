"use client"

import { CarProps } from '@/types/types'
import { useState } from 'react'
import { CustomButton , CarDetails } from '@/components';
import { calculateCarRent, generateCarImagebaseURL } from '@/utils';
import Image from 'next/image';

const CarCard = ({model , carClass , make , city_mpg , year , transmission , drive , fuel_type, cylinders , combination_mpg, displacement, highway_mpg} : CarProps) => {

    const carRent = calculateCarRent(city_mpg , year);
    const [open , setOpen] = useState(false);
  return (
    <div className='car-card group'>
       <div className="car-card__content">
        <h2 className='car-card__content-title'>
            {make} {model}
        </h2>
       </div>
       <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
            $
        </span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>
        /day
        </span>
       </p>
       <div className='relative w-full h-40 my-3 object-contain'>
            <Image src={generateCarImagebaseURL({model , carClass , make , city_mpg , year , transmission , drive , fuel_type, cylinders , combination_mpg, displacement, highway_mpg})} alt="car photo" fill className="object-contain" priority />
       </div>

       <div className="relative w-full flex mt-2">

        <div className="flex group-hover:invisible w-full justify-between text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/steering-wheel.svg" width={20} height={20} alt='steering-wheel'/>
                <p className='text-[14px]'>
                    {transmission === 'a' ? "Automatic" : "Manual"}
                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/tire.svg" width={20} height={20} alt='tire photo'/>
                <p className='text-[14px]'>
                    {drive.toUpperCase()}
                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/gas.svg" width={20} height={20} alt='gas photo'/>
                <p className='text-[14px]'>
                    {city_mpg} MPG
                </p>
            </div>
        </div>
        <div className="car-card__btn-container">
            <CustomButton 
                title='Details'
                containerStyles='w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading=[17px] front-bold'
                rightIcon = "/right-arrow.svg"
                handleClick={() => setOpen(true)}
            />
        </div>
       </div>
       <CarDetails open={open} closeModal = { () => setOpen(false)} car={{model , carClass , make , city_mpg , year , transmission , drive , fuel_type, cylinders , combination_mpg, displacement, highway_mpg}}/>
    </div>
  )
}

export default CarCard