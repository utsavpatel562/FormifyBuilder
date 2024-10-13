import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full bg-slate-200 flex justify-between p-3">
        <div>
          <div className="flex justify-start gap-5 p-3">
            <a href="#">Home</a>
            <a href="#">Service</a>
            <a href="#">Support</a>
            <a href="#">About</a>
          </div>
        </div>
        <div className="p-3">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
};

export default Header;
