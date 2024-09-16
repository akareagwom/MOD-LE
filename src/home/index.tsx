import React from 'react';
import NavBar from './components/NavBar';
import AboutCard from './components/AboutCard';

interface Props {
  
}

const Home: React.FC<Props> = ({  }) => {
  return (
    <div className='black'>
      
      <div className="row">
      <div className="col s12">
        <NavBar/>
      </div>
      <div className="grid-container">
        <div className="col s12 m4 grid-system l5"><AboutCard/></div>
        <div className="col s12 m4 grid-system l3"><AboutCard/></div>
        <div className="col s12 m4 grid-system l3"><AboutCard/></div>
      </div>
      {/* <div className="col s4 push-s0"><span className="flow-text red-text"><AboutCard/></span></div>
      <div className="col s4 push-s0"><span className="flow-text red-text"><AboutCard/></span></div>
      <div className="col s4 push-s0"><span className="flow-text red-text"><AboutCard/></span></div> */}
    </div>
    </div>
  );
};

export default Home;