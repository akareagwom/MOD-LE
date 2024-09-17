import React from 'react';


interface Props {
  
}

const NavBar: React.FC<Props> = ({  }) => {
  return (
    <nav className='bg-yellow-900 m-4 rounded-xl'>
    <div className="flex p-6 text-white justify-between">
      <a href="#" className="">Logo</a>
      <ul id="" className="flex justify-between w-[30%]">
        <li >HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </div>
  </nav>
  );
};

export default NavBar;