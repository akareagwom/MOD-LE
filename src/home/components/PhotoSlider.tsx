import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

interface Props {
  
}

const PhotoSlider: React.FC<Props> = ({  }) => {
    const [image,setImage] = useState();
  
  return (
    <div >
        <div className="">
            <img className='grayscale rounded-xl w-[250px] h-[250px]' src="https://plus.unsplash.com/premium_photo-1724017205222-45a29f1cacd4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photo" />
        </div>

        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider className='text-white'>
          <Slide  index={0}>
             <img className='grayscale rounded-xl w-[250px] h-[250px]' src="https://plus.unsplash.com/premium_photo-1724017205222-45a29f1cacd4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photo" />
          </Slide>
          <Slide index={1}>
             <img className='grayscale rounded-xl w-[250px] h-[250px]' src="https://plus.unsplash.com/premium_photo-1724017205222-45a29f1cacd4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photo" />
          </Slide>
          <Slide index={2}>
             <img className='grayscale rounded-xl w-[250px] h-[250px]' src="https://plus.unsplash.com/premium_photo-1724017205222-45a29f1cacd4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photo" />
          </Slide>
        </Slider>
        <ButtonBack className='text-white'>Back</ButtonBack>
        <ButtonNext className='text-white'>Next</ButtonNext>
      </CarouselProvider>
            
    </div>
  );
};

export default PhotoSlider;