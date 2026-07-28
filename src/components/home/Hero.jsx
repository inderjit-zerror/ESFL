import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-svh overflow-hidden flex bg-black'>
      <video muted loop autoPlay src={`/videos/HHVideo.mp4`} className='w-full h-full object-cover object-center'></video>
    </div>
  )
}

export default Hero