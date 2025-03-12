import React, { useState } from "react";
import PersonelDetail from "../form/PersonelDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

function ResumeForm() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);

  return (
    <div>
      <div className='flex justify-between items-center mb-2'>
        <Button variant='outline' size='sm'>
          Themes <LayoutGrid />
        </Button>
        <div className='flex items-center gap-1'>
          {activeFormIndex > 1 && (
            <Button
              variant='outline'
              size='sm'
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft /> back
            </Button>
          )}

          <Button
            // variant='outline'
            // className='bg-blue-500 text-white hover:bg-blue-600'
            size='sm'
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
            disabled={enableNext}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>
      {/* personel detail and summery */}
      {activeFormIndex == 1 ? (
        <PersonelDetail enableNext={setEnableNext} />
      ) : null}
      {/* experience */}
      {/* education */}
      {/* skills  */}
    </div>
  );
}

export default ResumeForm;
