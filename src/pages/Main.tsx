import ParallaxComponent from 'components/ParallaxComponent';
import RelayText from 'components/RelayText';
import Text from 'components/Text';
import React from 'react'

function Main() {
  return (
    <div className='main'>
      <ParallaxComponent url='assets/images/bg-image.jpg' strength={600}>
        <section className='top-banner'>
          <Text text={"I love develop with"} color={"white"} fontSize='400%'/>
          <RelayText text={"JavaScript"} color={"#fff1aa"} fontSize='400%'/>
        </section>
        <div className='draft'>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
        </div>
      </ParallaxComponent>
      
    </div>
  )
}

export default Main;
