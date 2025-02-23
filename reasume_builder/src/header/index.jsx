import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router";

function Header() {
  const { isSignedIn } = useUser();
  return (
    <div className='p-3 px-5 flex justify-between'>
      <img src='/logo.svg' alt='' width={100} height={100} className='' />
      {isSignedIn ? (
        <>
          <Button>Dashboard</Button>
          <UserButton />
        </>
      ) : (
        <Link to={""}>
          <Button>Get started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
