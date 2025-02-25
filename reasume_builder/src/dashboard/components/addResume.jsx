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
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
            <div>
              <Button>create</Button>
              <Button>close</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default addResume;
