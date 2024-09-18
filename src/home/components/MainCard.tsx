import React from 'react';

interface Props {
  
}

const MainCard: React.FC<Props> = ({  }) => {
  return (
    <div className='bg-[#cbb89d] w-[60%] rounded-xl'>
      <div className="py-4 px-4">
        <h1 className='text-white text-2xl align-start'>steady</h1>
        <img className='rounded-xl my-2' src="model.avif" alt="" />

        <div className="">
          <ul>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainCard;