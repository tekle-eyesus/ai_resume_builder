import React from "react";

function ExpriencePreview({ resumeInfo }) {
  return (
    <div>
      <h1
        className='font-bold text-lg text-center'
        style={{ color: resumeInfo?.themeColor }}
      >
        Experience
      </h1>
    </div>
  );
}

export default ExpriencePreview;
