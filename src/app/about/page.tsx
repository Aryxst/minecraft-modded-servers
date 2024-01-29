import Link from 'next/link';
import Main from '@/components/Main';
export default async function Page() {
 return (
  <Main>
   <div className='mt-4'>
    <h1 className='rounded-t-lg bg-[var(--mistgray)] pb-2 pt-2 text-center text-2xl text-white'>About</h1>
    <div className='prose border bg-white p-4 shadow'>
     <p>Hey, I&apos;m Jessie Odeh. I don&apos;t have much to share about myself, but I established this website to simplify the search for Minecraft Modded Servers, as they can be challenging to locate. During my own search, I encountered a few options, but none of them truly met my satisfaction due to their page style. This doesn&apos;t mean that they were bad, they just didn&apos;t fit my views.</p>
     <p>So, I took it upon myself to create this website with the hope of assisting others in finding Minecraft Modded Servers more easily. I want to clarify that I have no connections with the owners of these servers; they may not even be aware of this website.</p>
     <blockquote>I must be honest; I created this site to practice as I&apos;m new to development. Therefore, please don&apos;t expect me to update it frequently.</blockquote>
     <hr />
     <p>
      If you find the website helpful and would like to support my efforts, you can contribute via{' '}
      <Link target='_blank' href='//www.buymeacoffee.com/jessieodeh' prefetch={false}>
       BuyMeACoffee
      </Link>
      . Feel free to reach out to me through any of the links listed below or{' '}
      <Link href='/contact' prefetch={false}>
       email
      </Link>
      .
     </p>
     <p>Your support and feedback are greatly appreciated! Alternatively, you can also explore other creations of mine or just see more of my work.</p>
     <div className='mt-4 flex text-center'>
      <Link target='_blank' href='//github.com/aryxst/minecraft-modded-servers' className='flex-1' prefetch={false}>
       Github Repo
      </Link>
      <Link target='_blank' href='//jessieodeh.vercel.app' className='flex-1' prefetch={false}>
       Portfolio
      </Link>
     </div>
    </div>
   </div>
  </Main>
 );
}
