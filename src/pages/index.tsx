import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>
        Hello World
        <Footer/>
      </div>
    </main>
  )
}
