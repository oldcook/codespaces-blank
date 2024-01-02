import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Button>Hello</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="destructive" className='px-10'>Delete</Button>
    </main>
  )
}
