import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import resumeInfoContext from "@/context/resumeInfoContext";
import React, { useContext } from "react";

function PersonelDetail({ enableNext }) {
  const { resumeInfo, setResumeInfo } = useContext(resumeInfoContext);
  const handleInputChange = (e) => {
    enableNext(true);
    const { name, value } = e.target;

    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    enableNext(false);
    e.preventDefault();
  };
  return (
    <div className='rounded-md border-t-primary border-t-4 p-2 shadow-md'>
      <h2 className='font-bold text-xl font-sans'>Personnel Detail</h2>
      <p className='text-sm font-mono'>Start with basic information</p>

      <form action='' onSubmit={onSubmit}>
        <div className='grid grid-cols-2 mt-2 gap-2'>
          <div>
            <label className='text-sm'>First Name</label>
            <Input required name='firstName' onChange={handleInputChange} />
          </div>
          <div>
            <label className='text-sm'>Last Name</label>
            <Input required name='lastName' onChange={handleInputChange} />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Job Title</label>
            <Input required name='jobTitle' onChange={handleInputChange} />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Address</label>
            <Input required name='address' onChange={handleInputChange} />
          </div>
          <div>
            <label className='text-sm'>Phone</label>
            <Input required name='phone' onChange={handleInputChange} />
          </div>
          <div>
            <label className='text-sm'>Email</label>
            <Input required name='email' onChange={handleInputChange} />
          </div>
        </div>
        <div className='flex justify-end my-4'>
          <Button size='sm' variant='outline' type='submit'>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonelDetail;
