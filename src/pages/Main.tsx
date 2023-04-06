import ParallaxComponent from 'components/ParallaxComponent';
import React from 'react'

function Main() {
  return (
    <div className='main'>
      <ParallaxComponent url='assets/images/bg-image.jpg' strength={600}>
        <section className='top-banner'></section>
      </ParallaxComponent>
    </div>
  )
}

export default Main;
