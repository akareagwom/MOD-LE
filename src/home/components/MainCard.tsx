import React from 'react';

interface Props {
  
}

const MainCard: React.FC<Props> = ({  }) => {
  return (
    <div className='bg-orange-200 rounded-xl'>
      <div className="p-6">
        <img className='rounded-xl' src="model.avif" alt="" />
      </div>
    </div>
  );
};

export default MainCard;