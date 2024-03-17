import React from 'react';
import Image from 'next/image';
import { LayoutGrid , Search, ShoppingBag, ShoppingBasket } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Header() {
  return (
    <div className="p-5 shadow-md flex justify-between">
    <div className='flex items-center gap-8'>
      <Image src ='/logo.png' alt='logo' width={150} height={100}/>
     
        <h1 className='hidden md:flex gap-2 items-center border rounded-full p-2 px-10'>
          <LayoutGrid className='h-5 w-5'/>Category
        </h1>
        <div className='md:flex gap-3 items-center border rounded-full p-2 px-5'>
          <Search/>
          <input type='text' className='outline-none'
          placeholder='search'/>
         

        </div>
        </div>
        <div className='flex item-center gap-5'>
           <h2 className='flex gap-2 items-center text-lg'> 
             <ShoppingBag className='h-7 w-7'/></h2>
             <Button>login</Button>
             </div>
    </div>
  );
}

export default Header;
