import Link from 'next/link';
import Main from '@/components/Main';
import { typeNames } from '@/lib/servers';

export default async function Home() {
 'use server';
 return (
  <Main>
   <div>
    <h1 className='servers-h1'>All Server Types</h1>
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
