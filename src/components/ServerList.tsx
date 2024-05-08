import Image from 'next/image';
import Link from 'next/link';
import CopyButton from '@/components/CopyButton';
import type { ServerMetadata, MinecraftServerAPIResponse } from '@/lib/servers';
import { nameTrim } from '@/lib/utils';
import CopyIcon from '@/assets/icons/copy.svg';

import '@/styles/modules/ServerList.scss';

export const ServerListContainer = ({ children }) => <ul className='my-4 grid min-h-[calc(100vh-(181px+16px))] w-full gap-4 p-4 font-sans font-normal sm:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))]'>{children}</ul>;

export const ServerItem = ({ id, metadata: { name, ip }, players, online }: MinecraftServerAPIResponse & { metadata: ServerMetadata } & { id: number }) => {
 return (
  <li className='h-fit rounded-lg border bg-white p-4'>
   <Link href={`/server/${id}`} prefetch={false}>
    <h1 className='text-center text-xl font-bold'>{nameTrim(name)}</h1>
   </Link>
   <div className='my-2 h-1 rounded-l-full rounded-r-full bg-gray-200' />
   <ul className='flex flex-col gap-1'>
    <li className='flex justify-between'>
     <p>Online Players:</p>
     <span className='text-right'>{online ? `${players.online} / ${players.max}` : '0/0'}</span>
    </li>

    <li className='flex justify-between'>
     <p>Status:</p>
     <div className='flex h-fit items-center gap-1 text-right'>
      <svg viewBox='0 0 100 100' className={`inline size-2 ${online ? 'fill-green-500' : 'fill-red-500'}`}>
       <circle cx='50' cy='50' r='45' />
      </svg>

      {online ? 'Online' : 'Offline'}
     </div>
    </li>

    <li className='mt-2 w-full rounded bg-gray-100 p-2'>
     {ip}
     <CopyButton textToCopy={ip} afterCopy={'Copied!'} className='float-right'>
      <Image src={CopyIcon} height={20} width={20} alt='Copy Icon' />
     </CopyButton>
    </li>
   </ul>
  </li>
 );
};
