import { PlusCircle } from "lucide-react";
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

function addResume() {
  const [isOpen, setIsOpen] = useState(false);

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
              />
            </DialogDescription>

            <div className='space-x-2 flex items-center justify-end'>
              <Button className='bg-gray-300' onClick={() => setIsOpen(false)}>
                cancel
              </Button>
              <Button>create</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default addResume;
