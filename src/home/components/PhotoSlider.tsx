import React from 'react';

interface Props {
  
}

const PhotoSlider: React.FC<Props> = ({  }) => {
  return (
    <div >
        <div className="">
            <img className='grayscale rounded-xl w-[100%] h-[200px]' src="https://plus.unsplash.com/premium_photo-1724017205222-45a29f1cacd4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photo" />
        </div>
            
    </div>
  );
};

export default PhotoSlider;