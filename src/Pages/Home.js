import React from 'react'
import Slider from '../Component/Slider/Slider'
import SliderOffer from '../Component/Slider/offerSlider'
import Feature from '../Component/Feature/Feature'
import Filter from '../Pages/filter'
export default function Home() {
    return (
        <div className='swiperSlider'>
             <Slider /> 
             <SliderOffer /> 
             <Feature />
             <Filter name={"Shop by Category"}/>
             <Filter name={"Shop by Brands"}/>
             <Filter name={"Our Exclusive Women's Collection"}/>
             <Filter name={"Our Exclusive Men's Collection"}/>
             <Filter name={"Beauty & Bodycare"}/>
             <Filter name={"Exclusive Jewellery"}/>
             <Filter name={"Get Your Dream Gadgets"}/>
             <Filter name={"Electronics You’ll Love"}/>
             <Filter name={"Design Your Lifestyle"}/>
             <Filter name={"Shatranji & Rugs Made by Rural Artisans"}/>
             <Filter name={"Our Exclusive Home Decor Collections"}/>
             <Filter name={"Everything about Cars & Bikes!"}/>
        </div>
    )
}
