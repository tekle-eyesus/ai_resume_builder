import { color } from "framer-motion";
import React from "react";

function SkillsPreview({ resumeInfo }) {
  return (
    <div>
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

        {resumeInfo?.skills.map((skill, index) => (
          <div key={index} className='my-2'>
            <h2 className='text-xs'> {skill.name} </h2>
            <div>
              <div
                className='h-2'
                style={{
                  backgroundColor: resumeInfo?.themeColor,
                  width: skill.rating + "%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;
