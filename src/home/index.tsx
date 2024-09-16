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
      <div className="col s5"><AboutCard/></div>
      <div className="col s3"><AboutCard/></div>
      <div className="col s4"><AboutCard/></div>
      <div className="col s5"><AboutCard/></div>
    </div>
    </div>
  );
};

export default Home;