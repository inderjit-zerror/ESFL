'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'

const MovingSlider = () => {

    const sliderArr = [
        {
            texture: `https://cdn.sanity.io/images/krc73rcv/production/c22909d6552d32026a64ba1fde1c09dcf0c43d4c-29x31.svg?w=30&auto=format&dpr=2`,
            text: `Snacks`
        },
        {
            texture: `https://cdn.sanity.io/images/krc73rcv/production/7911366576ad2a3d4f2b7ae53a464d37caf249cf-30x31.svg?w=30&auto=format&dpr=2`,
            text: `Desserts`
        },
        {
            texture: `https://cdn.sanity.io/images/krc73rcv/production/5899d257d1890da7d5f04281bff8091dc0a0e1f3-30x31.svg?w=30&auto=format&dpr=2`,
            text: `Dairy`
        },
        {
            texture: `https://cdn.sanity.io/images/krc73rcv/production/7911366576ad2a3d4f2b7ae53a464d37caf249cf-30x31.svg?w=30&auto=format&dpr=2`,
            text: `Samosas`
        },
    ]

    const Slider = () => {
        return (
            <div className='w-fit h-fit flex whitespace-nowrap  gap-20  Font3'>
                {
                    sliderArr.map((item, index) => {
                        return(
                            <div key={index} className='w-fit h-fit flex flex-nowrap gap-5 justify-center items-center'>
                                <img src={item.texture} alt="texture" className='w-[30px]' />
                                <p className='text-[1.3vw] leading-[1.2vw] max-md:text-[18px] max-md:leading-[18px]'>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }


    useEffect(()=>{
        gsap.to('.SideMoveRL',{
            x:'-50%',
            duration:20,
            repeat:-1,
            ease:'linear'
        })
    },[])


    return (
        <div className='w-full h-fit flex overflow-x-hidden whitespace-nowrap flex-nowrap  flex-shrink-0  gap-20 bg-[#C5B4E2] py-[2vw] max-md:py-[5vw] '>
            <span className='SideMoveRL w-fit h-fit flex whitespace-nowrap flex-nowrap flex-shrink-0  gap-20 '>
                <Slider />
                <Slider />
                <Slider />
                <Slider />
                <Slider />
            </span>
            <span className='SideMoveRL w-fit h-fit flex whitespace-nowrap flex-nowrap flex-shrink-0  gap-20 '>
                <Slider />
                <Slider />
                <Slider />
                <Slider />
                <Slider />
            </span>

        </div>
    )
}

export default MovingSlider