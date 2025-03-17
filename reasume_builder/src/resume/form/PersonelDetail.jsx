import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import resumeInfoContext from "@/context/resumeInfoContext";
import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import GlobalApi from "../../../services/GlobalApi";
import { LoaderCircle } from "lucide-react";

function PersonelDetail({ enableNext }) {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(resumeInfoContext);
  const [formData, setFormData] = useState();
  const [isLoading, setIsloading] = useState(false);

  const handleInputChange = (e) => {
    enableNext(true);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    setIsloading(true);
    enableNext(false);
    e.preventDefault();

    // insert to postgres database
    const data = {
      data: formData,
    };
    GlobalApi.updateResume(params.resumeId, data).then(
      (res) => {
        setIsloading(false);
        // console.log(res.data);
      },
      (error) => {
        console.log(error);
        setIsloading(false);
      }
    );
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
          <Button
            disabled={isLoading}
            size='sm'
            variant='outline'
            type='submit'
          >
            {isLoading ? <LoaderCircle className='animate-spin' /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonelDetail;
