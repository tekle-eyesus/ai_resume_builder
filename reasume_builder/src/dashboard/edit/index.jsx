import React, { useEffect } from "react";
import { useParams } from "react-router";

function ResumeEdit() {
  const params = useParams();
  useEffect(() => {
    console.log(params);
  }, []);
  return <div>Edit your resume!!!</div>;
}

export default ResumeEdit;
