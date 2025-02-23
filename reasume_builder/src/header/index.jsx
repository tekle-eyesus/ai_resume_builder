import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router";

function Header() {
  const { isSignedIn } = useUser();
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
      <img src='/logo.svg' alt='' width={100} height={100} className='' />
      {isSignedIn ? (
        <div className='flex items-center gap-2'>
          <Link to={"/dashboard"}>
            <Button variant='outline'>Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
