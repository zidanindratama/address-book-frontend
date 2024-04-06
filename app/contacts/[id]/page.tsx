import FormEditContact from "@/components/contact/FormEditContact";
import React from "react";

const page = ({ params }: any) => {
  return (
    <div>
      <FormEditContact id={params.id} />
    </div>
  );
};

export default page;
