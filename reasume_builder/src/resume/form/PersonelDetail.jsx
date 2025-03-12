import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function PersonelDetail() {
  const handleInputChange = (e) => {};
  return (
    <div className='rounded-md border-t-primary border-t-4 p-2 shadow-md'>
      <h2 className='font-bold text-xl font-sans'>Personnel Detail</h2>
      <p className='text-sm font-mono'>Start with basic information</p>

      <form action=''>
        <div className='grid grid-cols-2 mt-2 gap-2'>
          <div>
            <label className='text-sm'>First Name</label>
            <Input name='firstName' onChange={handleInputChange} />
          </div>
          <div>
            <label className='text-sm'>Last Name</label>
            <Input name='lastName' />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Job Title</label>
            <Input name='jobTitle' onChange={handleInputChange} />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Address</label>
            <Input name='address' onChange={handleInputChange} />
          </div>
          <div>
            <label className='text-sm'>Phone</label>
            <Input name='phone' onChange={handleInputChange} />
          </div>
          <div>
            <label className='text-sm'>Email</label>
            <Input name='email' onChange={handleInputChange} />
          </div>
        </div>
        <div className='flex justify-end my-4'>
          <Button size='sm' variant='outline'>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonelDetail;
