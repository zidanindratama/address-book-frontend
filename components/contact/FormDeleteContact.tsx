import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteData } from "@/hooks/useDeleteData";
import React from "react";

const FormDeleteContact = ({ id }: any) => {
  const mutationContact = useDeleteData({
    queryKey: "contactsData",
    dataProtected: `contact/${id}`,
    backUrl: "/contacts",
  });

  const onSubmit = () => {
    mutationContact.mutate();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"destructive"}>Delete contact</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete this
              contact and remove this data from the servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit" variant={"destructive"} onClick={onSubmit}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormDeleteContact;
