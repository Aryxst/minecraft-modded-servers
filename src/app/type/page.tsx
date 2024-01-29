import Link from 'next/link';
import Main from '@/components/Main';
import { typeNames } from '@/lib/servers';

export default async function Home() {
 'use server';
 return (
  <Main>
   <div>
    <h1 className='mb-2 pb-8 text-center text-2xl font-normal md:text-4xl'>All Server Types</h1>
    {Object.keys(typeNames).map((abbr, i) => (
     <Link href={`/type/${abbr}`} key={i} className='btn inline-flex'>
      {typeNames[abbr][0]}
      <span className='ml-3 w-fit rounded-md bg-white pl-2 pr-2 text-black'>{typeNames[abbr][2]}</span>
     </Link>
    ))}
   </div>
  </Main>
 );
}
