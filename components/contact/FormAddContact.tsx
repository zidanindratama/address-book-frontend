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
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { PhoneInput } from "../PhoneInput";
import { isValidPhoneNumber } from "react-phone-number-input";
import Link from "next/link";
import { useAddData } from "@/hooks/useAddData";

const formSchema = z.object({
  name: z
    .string()
    .min(4, {
      message: "Name must be at least 4 characters.",
    })
    .max(255, {
      message: "Name must not exceed 255 characters.",
    }),
  address: z
    .string()
    .min(4, {
      message: "Name must be at least 4 characters.",
    })
    .max(255, {
      message: "Name must not exceed 255 characters.",
    }),
  phoneNumber: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
});

const FormAddContact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const mutationContact = useAddData({
    queryKey: "contactsData",
    dataProtected: `contact`,
    backUrl: "/contacts",
  });

  const onSubmit = (data: FieldValues) => {
    mutationContact.mutate(data);
  };

  return (
    <div className="px-6 h-screen flex flex-col justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="shadow-md">
            <CardHeader>
              <div className="flex flex-row items-center justify-between gap-20">
                <h1 className="font-bold">Add New Contact</h1>
                <Button type="submit" className="w-fit">
                  Submit
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mt-6 space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your contact's name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Add the address here..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <PhoneInput
                          placeholder="Enter a phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
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

export default FormAddContact;
