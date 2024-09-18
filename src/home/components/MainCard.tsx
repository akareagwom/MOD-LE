import React from 'react';

interface Props {
  
}

const MainCard: React.FC<Props> = ({  }) => {
  return (
    <div className='bg-[#cbb89d] w-[70%] rounded-xl'>
      <h1 className='text-white text-2xl'>staedy</h1>
      <div className="py-4 px-4">
        <img className='rounded-xl' src="model.avif" alt="" />

      </div>
      <div className="">

      </div>
    </div>
  );
};

export default MainCard;