import React from "react";

function PersonalDetail({ resumeInfo }) {
  return (
    <div>
      {/* <h1>{resumeInfo.firstName}</h1>
       */}
      <h2 className=' font-bold text-xl text-center'>
        {" "}
        {resumeInfo?.firstName} {resumeInfo?.lastName}{" "}
      </h2>
      <h2
        className='font-medium text-lg text-center'
        style={{ color: resumeInfo?.themeColor }}
      >
        {resumeInfo?.jobTitle}
      </h2>
      <h2 className='font-normal text-xs text-center'>{resumeInfo?.address}</h2>

      <div className='flex  justify-evenly mt-2'>
        <h1 className='text-sm' style={{ color: resumeInfo?.themeColor }}>
          {resumeInfo?.email}
        </h1>
        <h1 className='text-sm' style={{ color: resumeInfo?.themeColor }}>
          {resumeInfo?.phone}
        </h1>
        <h1 className='text-sm' style={{ color: resumeInfo?.themeColor }}>
          github
        </h1>
      </div>
      <hr
        className='border-[1.5px] my-2'
        style={{ borderColor: resumeInfo?.themeColor }}
      />
    </div>
  );
}

export default PersonalDetail;
