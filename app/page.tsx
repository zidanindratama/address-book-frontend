import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const page = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <Image
          src="/hero.jpg"
          width={500}
          height={400}
          alt="hero"
          className="rounded-sm"
        />
        <CardHeader>
          <CardTitle>Address Book Simple Web App</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Made with <span className="font-bold">NextJS</span> for Frontend and{" "}
            <span className="font-bold">Laravel</span> for Backend
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={"/contacts"}>Go now!</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
