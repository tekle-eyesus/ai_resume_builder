import React, { useContext } from "react";
import PersonalDetail from "../preview/personalDetail";
import resumeInfoContext from "@/context/resumeInfoContext";
import SummeryPreview from "../preview/SummeryPreview";
import ExpriencePreview from "../preview/ExpriencePreview";

function ResumePreview() {
  const { resumeInfo, setResumeInfo } = useContext(resumeInfoContext);
  return (
    <div
      className='shadow-lg h-full border-t-[20px] p-14 rounded-sm'
      style={{
        borderColor: resumeInfo?.themeColor,
      }}
    >
      <PersonalDetail resumeInfo={resumeInfo} />
      <SummeryPreview resumeInfo={resumeInfo} />
      <ExpriencePreview resumeInfo={resumeInfo} />
    </div>
  );
}

export default ResumePreview;
