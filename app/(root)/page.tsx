import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <main className="ml-10 mt-10 flex gap-10">
      {/* <Button>Hello</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="destructive" className='px-10'>Delete</Button>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog> */}
    </main>
  )
}
