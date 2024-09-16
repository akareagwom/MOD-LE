import React from 'react';
import NavBar from './components/NavBar';

interface Props {
  
}

const Home: React.FC<Props> = ({  }) => {
  return (
    <div className='black '>
      
    <div className="row">
      <div className="col s12">
        <NavBar/>
      </div>
      <div className="col teal s6">6-columns (one-half)</div>
      <div className="col teal s6">6-columns (one-half)</div>
    </div>
    </div>
  );
};

export default Home;