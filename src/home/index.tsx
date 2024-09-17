import React from 'react';
import NavBar from './components/NavBar';
import AboutCard from './components/AboutCard';
import PhotoSlider from './components/PhotoSlider';

interface Props {
  
}

const Home: React.FC<Props> = ({  }) => {
  return (
    <div className='black'>
      
      <div className="">
      <div className="">
        <NavBar/>
      </div>
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="">
              <AboutCard/>
          </div>
          <div className="">
              <PhotoSlider/>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Home;