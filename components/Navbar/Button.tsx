import React from 'react';

const Button = (props: any) => {
  return (
    <button
      className='text-white  py-2 px-6 rounded md:ml-8 hover:text-[var(--orange)] 
    duration-500'
    >
      {props.children}
    </button>
  );
};

export default Button;
