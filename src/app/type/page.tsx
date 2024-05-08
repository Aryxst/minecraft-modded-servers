import Link from 'next/link';
import { typeNames } from '@/lib/servers';

export default async function Page() {
 'use client';
 return (
  <div className='flex min-h-[calc(100vh-189px)] flex-col justify-between px-4 py-4 text-black sm:px-8'>
   <div>
    <ul className='font-sans'>
     {Object.keys(typeNames).map((abbr, i) => {
      return (
       <Link href={`/type/${abbr}`} key={i} className='m-1 inline-flex rounded-lg bg-[var(--dark)] p-2 text-white'>
        {typeNames[abbr][0]}
        <span className='ml-3 w-fit rounded-md bg-white pl-2 pr-2 text-black'>{typeNames[abbr][2]}</span>
       </Link>
      );
     })}
    </ul>
   </div>
  </div>
 );
}
