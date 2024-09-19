import React from 'react';

interface Props {
  
}

const MainCard: React.FC<Props> = ({  }) => {
  return (
      <div className="py-4 px-4 bg-[#cbb89d] text-white w-[370px] h-[440px] rounded-xl">
        <h1 className=' text-2xl align-start'>steady</h1>
        <img className='rounded-xl my-2' src="model.avif" alt="" />

        <div className="">
          <ul>
            <li className='border-b-2 py-2'>home</li>
            <li className='border-b-2 py-2'>home</li>
            <li className='border-b-2 py-2'>home</li>
          </ul>
        </div>
      </div>
  );
};

export default MainCard;