import React from 'react';
import NavBar from './components/NavBar';
import AboutCard from './components/AboutCard';
import PhotoSlider from './components/PhotoSlider';
import MainCard from './components/MainCard';
import Footer from './components/Footer';
import ContactCard from './components/Contact';

interface Props {
  
}

const Home: React.FC<Props> = ({  }) => {
  return (
    <div className=''>
      <div className="">
        <NavBar/>
      </div>
      
      <section className='flex p-4 '>
        {/* section1 */}
        <div className="flex flex-wrap gap-4">
          <AboutCard/>
          <PhotoSlider/>
          <ContactCard/>
          <ContactCard/>
        </div>
        {/* section2 */}
        <div className="block">
          <MainCard/>
          <Footer/>
        </div>

      </section>
    

    
    </div>
  );
};

export default Home;