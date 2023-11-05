import React from 'react'

import { productos } from '../data';
import ProductoSlider from '../components/ProductoSlider';

const Shop = () => {
    const { title, subtitle } = productos;
    return (
        <section className='section text-center'>
            <div className="container mx-auto ">
                <div>
                    <h2 className='title font-primary'>{title}</h2>
                    <p className='max-w-[630px] mx-auto mb-[50px] lg:mb-[70px]'>{subtitle}</p>
                </div>
                <ProductoSlider />
            </div>
        </section>
    )
}

export default Shop