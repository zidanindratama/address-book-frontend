"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { DataTable } from "../DataTable";
import { contactColumns } from "../DataTableDepedencies";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useFetchData } from "@/hooks/useFetchData";
import { Skeleton } from "../ui/skeleton";

const ContactDataTable = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const count = searchParams.get("count") || "10";
  const limit = typeof count === "string" ? parseInt(count) : 10;

  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading, isSuccess, refetch, isRefetching } = useFetchData({
    queryKey: ["contactsData", page],
    dataProtected: `contact?count=${count}&page=${page}&search=${searchValue}`,
  });

  const handleSearch = () => {
    refetch();
    setSearchValue("");
  };

  const pageCount = Math.ceil(data?.data.data.total / limit);

  return (
    <div className="">
      {(isLoading || isRefetching) && <Skeleton className="w-full h-96" />}
      {isSuccess && !isRefetching && (
        <>
          <DataTable
            propsData={data?.data.data.data}
            columnsData={contactColumns}
            pageCount={pageCount}
          >
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="text"
                placeholder="Filter name..."
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Button type="submit" onClick={handleSearch}>
                Submit
              </Button>
            </div>
          </DataTable>
        </>
      )}
    </div>
  );
};

export default ContactDataTable;
