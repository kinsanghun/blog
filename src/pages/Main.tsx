import Cursor from 'components/Cursor';
import Draft from 'components/Draft';
import ParallaxComponent from 'components/ParallaxComponent';
import Text from 'components/Text';
import Textroll from 'components/Textroll';
import Title from 'components/Title';


function Main() {
  return (
    <div className='main'>
      <ParallaxComponent url='assets/images/bg-image.jpg' strength={600}>
        <section className='top-banner'>
          <Text text={"Fucking develop with"} color={"white"} fontSize='400%'/>
          <Text text="JavaScript" color='#fff1aa' fontSize='400%'/>
          <Cursor/>
        </section>
        <Draft/>
      </ParallaxComponent>
      <section>
        <Textroll/>
      </section>
      <section>
        <Title title='this is title'/>
      </section>
    </div>
  )
}

export default Main;
