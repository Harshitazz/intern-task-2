import React from 'react';

function Discount() {
  return (
    <div className='m-1 rounded-full bg-red-100 mx-2 px-1 flex'>
      <p className="text-red-500 flex min-[375px]:hidden">-</p>
      <p className="text-red-500">20% </p>
      <p className="text-red-500 hidden min-[375px]:flex">. discount</p>
    </div>
  );
}

export default Discount;
