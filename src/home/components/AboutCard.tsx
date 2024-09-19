import React from 'react';


interface Props {
  
}

const AboutCard: React.FC<Props> = ({  }) => {
  return (
    <div className="bg-[#cbb89d] rounded-xl w-[400px] h-[250px]">
    <div className="p-2">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
    </div>
  </div>
  );
};

export default AboutCard;