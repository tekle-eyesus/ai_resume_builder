import React from "react";

function EducationPreview({ resumeInfo }) {
  return (
    <div className='my-2'>
      <h1
        className='font-semibold text-lg text-center'
        style={{ color: resumeInfo?.themeColor }}
      >
        Education
      </h1>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.education.map((education, index) => (
        <div key={index} className='my-5'>
          <h2 className='text-sm font-bold'>{education.universityName}</h2>
          <h2 className='text-xs font-normal flex justify-between'>
            {" "}
            {education.degree} in {education.major}{" "}
            <span>
              {education.startDate} - {education.endDate}
            </span>
          </h2>
          <p className='text-xs my-1'>{education.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationPreview;
