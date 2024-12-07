import React, { Children } from 'react'
interface name {
  name:string,
  className?:string
}


function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className='bg-blue-500 rounded py-2 px-5 text-white'>{children}</button>
  );
}

export default Button;