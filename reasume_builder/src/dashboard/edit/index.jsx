import dummy from "@/dummy_data/dummy";
import ResumeForm from "@/resume/components/resumeForm";
import ResumePreview from "@/resume/components/resumePreview";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function ResumeEdit() {
  const params = useParams();
  const [resumeInfo, setResumeInfo] = useState();
  useEffect(() => {
    // console.log(params);
    setResumeInfo(dummy);
  }, []);
  return (
    <ResumeInfoContext.Provider value={{}}>
      <div>
        {/* form section  */}
        <ResumeForm />
        {/* resume preview section */}

        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ResumeEdit;
