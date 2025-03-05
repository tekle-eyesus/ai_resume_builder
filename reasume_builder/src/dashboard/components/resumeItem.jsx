import React from "react";

function ResumeItem({ resume }) {
  return (
    <div>
      <div
        className='p-14 mx-2 border h-[250px] flex justify-center items-center rounded-md bg-gray-100 mt-5 cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-md'
        onClick={() => setIsOpen(true)}
      >
        {resume.title}
      </div>
    </div>
  );
}

export default ResumeItem;
