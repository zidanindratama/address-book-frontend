import Navigation from "@/components/Navigation";
import ContactDataTable from "@/components/contact/ContactDataTable";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="py-6 px-8 md:px-60">
      <Navigation />
      <Suspense>
        <ContactDataTable />
      </Suspense>
    </div>
  );
};

export default page;
