import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import FormUploadContact from "./contact/FormUploadContact";

const Navigation = () => {
  return (
    <div className="pb-5 flex flex-row justify-between items-center">
      <Link href={"/"} className="font-bold text-md">
        Home
      </Link>
      <div className="flex flex-row justify-between items-center gap-4">
        <Button variant={"outline"} asChild>
          <Link href={"/contacts/add"} className="font-bold text-md">
            Add new contact
          </Link>
        </Button>
        <Button variant={"outline"} asChild>
          <Link href={"/contacts/upload"} className="font-bold text-md">
            Upload Contacts
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
