import React from "react";
import { Link } from "react-router";

function ResumeItem({ resume }) {
  return (
    <div>
      <Link
        to={`/dashboard/resume/${resume.documentId}/edit`}
        className='p-14 mx-2 border h-[250px] flex justify-center items-center rounded-md bg-gray-100 mt-5 cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-md border-blue-500'
        onClick={() => setIsOpen(true)}
      >
        {resume.title}
      </Link>
    </div>
  );
}

export default ResumeItem;
