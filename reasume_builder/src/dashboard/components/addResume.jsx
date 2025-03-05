import { Loader2, PlusCircle } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/clerk-react";
import GlobalApi from "../../../services/GlobalApi";

function addResume() {
  const [isOpen, setIsOpen] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const onCreate = () => {
    setIsLoading(true);
    const uuid = uuidv4();
    const data = {
      data: {
        title: resumeTitle,
        resumeid: uuid,
        userName: user?.fullName,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      },
    };

    GlobalApi.createReasume(data).then((res, err) => {
      console.log("result from the API", res);
      if (res) {
        setIsLoading(false);
      }
    });
  };

  return (
    <div>
      <div
        className='p-14 border h-[250px] flex justify-center items-center rounded-md bg-gray-100 mt-5 cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-md'
        onClick={() => setIsOpen(true)}
      >
        <PlusCircle />
      </div>

      <Dialog open={isOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p>Add your resume title</p>
              <Input
                placeholder='Ex. Machine learning Expert'
                className='my-4'
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>

            <div className='space-x-2 flex items-center justify-end'>
              <Button className='bg-gray-300' onClick={() => setIsOpen(false)}>
                cancel
              </Button>
              <Button
                onClick={() => onCreate()}
                disabled={!resumeTitle || isLoading}
              >
                {isLoading ? <Loader2 className='animate-spin' /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default addResume;
