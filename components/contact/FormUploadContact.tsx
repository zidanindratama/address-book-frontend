"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { useAddData } from "@/hooks/useAddData";

const formSchema = z.object({
  file: z.any().optional(),
});

const FormUploadContact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleDownload = () => {
    const filePath = "/example-file-contacts.json";
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "example-file-contacts.json";
    link.click();
  };

  const fileRef = form.register("file");

  const mutationContact = useAddData({
    queryKey: "contactsData",
    dataProtected: `contact/upload`,
    backUrl: "/contacts",
    multipart: true,
  });

  const onSubmit = (data: FieldValues) => {
    const form = new FormData();
    form.append("file", data.file[0]);
    mutationContact.mutate(form);
  };

  return (
    <div className="px-6 h-screen flex flex-col justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="shadow-md">
            <CardHeader>
              <div className="flex flex-row items-center justify-between gap-20">
                <h1 className="font-bold">Upload Contacts</h1>
                <Button type="submit" className="w-fit">
                  Submit
                </Button>
              </div>
              <Button type="button" variant={"link"} onClick={handleDownload}>
                Download file example to upload.
              </Button>
            </CardHeader>
            <CardContent>
              <div className="mt-2 space-y-6">
                <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>File</FormLabel>
                        <FormControl>
                          <Input type="file" {...fileRef} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant={"outline"} asChild>
                <Link href={"/contacts"}>Back</Link>
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default FormUploadContact;
