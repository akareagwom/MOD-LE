import React from 'react';
import NavBar from './components/NavBar';
import AboutCard from './components/AboutCard';
import PhotoSlider from './components/PhotoSlider';
import MainCard from './components/MainCard';
import Footer from './components/Footer';

interface Props {
  
}

const Home: React.FC<Props> = ({  }) => {
  return (
    <div className=''>
      <div className="">
        <NavBar/>
      </div>
      
      <section className='flex  gap-4 w-[100%] p-4'>
        {/* section1 */}
        <div className="flex gap-4">
              <AboutCard/>
              <PhotoSlider/>
        </div>

        {/* section2 */}
        <div className="m-0 p-0 w-[90%] gap-0">
          <MainCard/>
          <Footer/>
        </div>

        
      </section>
    
    </div>
  );
};

export default Home;