import React from 'react'

const Factory = () => {
  return (
    <div className='w-full h-svh overflow-hidden flex bg-black relative'>
      <video muted loop autoPlay src={`/videos/Factory.mp4`} className='w-full h-full object-cover object-center'></video>
      <div className='w-full h-full absolute top-0 left-0 z-20 bg-black/30 px-10 pt-30'>
        <h1 className='Heading_1 capitalize HNM_FONT text-white '>
            A look inside our factories <br/> and offices hygiene, precision <br/> and consistency at <br/> every stage.
        </h1>
      </div>
    </div>
  )
}

export default Factory
