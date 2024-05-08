import Link from 'next/link';
export default async function Page() {
 return (
  <div className='flex min-h-screen flex-col items-center justify-between p-8 text-black lg:min-h-[calc(100vh-189px)]'>
   <div className='w-full md:max-w-[700px]'>
    <h1 className='w-full rounded-t-lg bg-[var(--mistgray)] pb-2 pt-2 text-center font-mono text-2xl text-white md:max-w-[700px]'>About</h1>
    <div className='prose-sm text-balance border bg-white p-6 font-sans md:prose md:max-w-[700px]'>
     <p>Hey, I&apos;m Jessie Odeh. I don&apos;t have much to share about myself, but I established this website to simplify the search for Minecraft Modded Servers, as they can be challenging to locate. </p>
     <p>
      Feel free to reach out to me through any of the links listed below or{' '}
      <Link href='/contact' prefetch={false}>
       email
      </Link>
      .
     </p>
     <p>Your support and feedback are greatly appreciated! Alternatively, you can also explore other creations of mine or just see more of my work.</p>
     <ul className='not-prose mt-8 flex justify-evenly'>
      <li>
       <Link target='_blank' href='https://github.com/aryxst/minecraft-modded-servers' className='flex-1' prefetch={false}>
        Github Repo
       </Link>
      </li>
      <li>
       <Link target='_blank' href='https://aryxst.github.io' className='flex-1' prefetch={false}>
        Portfolio
       </Link>
      </li>
     </ul>
    </div>
   </div>
  </div>
 );
}
