import React from "react";

function ExpriencePreview({ resumeInfo }) {
  return (
    <div>
      <h1
        className='font-semibold text-lg text-center'
        style={{ color: resumeInfo?.themeColor }}
      >
        Professional Experience
      </h1>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.experience.map((experience, index) => (
        <div key={index} className='my-5'>
          <h2 key={index} className='font-semibold text-sm '>
            {experience?.title}
          </h2>
          <h2 className='font-normal text-xs flex justify-between'>
            {experience?.companyName}, {experience?.city}
            {experience?.state}
            <span>
              {experience?.startDate}
              {"-"}
              {experience?.currentlyWorking ? "present" : experience?.endDate}
            </span>
          </h2>
          <p className='text-xs my-2'>{experience?.workSummery}</p>
        </div>
      ))}
    </div>
  );
}

export default ExpriencePreview;
