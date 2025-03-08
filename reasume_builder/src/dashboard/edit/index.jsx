import dummy from "@/dummy_data/dummy";
import ResumeForm from "@/resume/components/resumeForm";
import ResumePreview from "@/resume/components/resumePreview";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import resumeInfoContext from "@/context/resumeInfoContext";
function ResumeEdit() {
  const params = useParams();
  const [resumeInfo, setResumeInfo] = useState();

  useEffect(() => {
    // console.log(params);
    setResumeInfo(dummy);
  }, []);

  return (
    <resumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-5'>
        {/* form section  */}

        <ResumeForm />

        {/* resume preview section */}

        <ResumePreview />
      </div>
    </resumeInfoContext.Provider>
  );
}

export default ResumeEdit;
