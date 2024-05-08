import Image from 'next/image';
import Link from 'next/link';
import Copy from '@/components/Copy';
import { type ServerMetadata, type MinecraftServerAPIResponse } from '@/lib/servers';
import { nameTrim } from '@/lib/utils';
import CopyIcon from '@/assets/icons/copy.svg';

export const ServerListContainer = ({ children }) => <ul className='my-4 grid min-h-screen w-full gap-4 px-4 py-4 font-sans font-normal sm:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] sm:px-8 lg:min-h-[calc(100vh-(189px+16px))]'>{children}</ul>;

export const ServerItem = ({ id, metadata: { name, ip, type }, players, online }: MinecraftServerAPIResponse & { metadata: ServerMetadata } & { id: number }) => {
 return (
  <li className='h-fit rounded-lg border bg-white p-4'>
   <Link href={`/server/${id}`} prefetch={false}>
    <h1 className='text-center text-xl font-bold'>{nameTrim(name).prefix}</h1>
   </Link>
   <div className='my-2 h-1 rounded-l-full rounded-r-full bg-gray-200' />
   <ul className='flex flex-col gap-1'>
    <li className='flex justify-between'>
     <p>Online Players:</p>
     <span className='text-right'>{online ? `${players.online} / ${players.max}` : 'N/A'}</span>
    </li>
    <li className='flex justify-between'>
     <p>Status:</p>
     <div className='flex h-fit items-center gap-1'>
      <svg viewBox='0 0 100 100' className={`inline size-2 ${online ? 'fill-green-500' : 'fill-red-500'}`}>
       <circle cx='50' cy='50' r='45' />
      </svg>
      {online ? 'Online' : 'Offline'}
     </div>
    </li>
    <li className='flex justify-between'>
     <p>Modpack:</p>
     <div>
      <Link href={`/type/${type}`}>{nameTrim(name).modpack}</Link>
     </div>
    </li>

    <li className='mt-2 w-full rounded bg-gray-100 p-2'>
     {ip}
     <Copy textToCopy={ip} afterCopy={'Copied!'} className='float-right'>
      <Image src={CopyIcon} height={20} width={20} alt='Copy Icon' />
     </Copy>
    </li>
   </ul>
  </li>
 );
};
