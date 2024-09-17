import React from 'react';


interface Props {
  
}

const AboutCard: React.FC<Props> = ({  }) => {
  return (
    <div className="row ">
    <div className="grid-system">
      <div className="card-panel brown lighten-3">
        <div className="card-content white-text">
          <span className="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutCard;