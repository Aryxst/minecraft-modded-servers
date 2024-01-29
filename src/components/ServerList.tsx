import Link from 'next/link';
import CopyButton from '@/components/CopyButton';
import type { ServerMetadata, MinecraftServerAPIResponse } from '@/lib/servers';

export const ServerListContainer = ({ children }) => <div className='grid w-screen grid-cols-1 place-items-center gap-x-2 gap-y-4 md:grid-cols-2  md:gap-x-5 lg:w-fit xl:grid-cols-3 xl:gap-x-[25px]'>{children}</div>;

export const ServerItem = ({ id, metadata: { name, ip }, players, online }: MinecraftServerAPIResponse & { metadata: ServerMetadata } & { id: number }) => {
 return (
  <div className='server-item mt-2 grid h-fit w-[95%] grid-cols-3 rounded-lg bg-white shadow-md lg:w-[475px] xl:w-[400px] 2xl:w-[500px] '>
   <Link href={`/server/${id}`} prefetch={false} className='server-item_name h-full rounded-t-md bg-gray-200 pb-0.5 pl-0.5 pr-0.5 pt-0.5 text-center text-base font-normal transition-colors lg:text-[16px] 2xl:text-[18px]'>
    <h1>{name}</h1>
   </Link>
   <div className='server-item_online-players m-1 h-fit rounded-b-md rounded-t-md bg-gray-200 text-center font-normal'>
    <p>Players</p>
    <span>{online ? `${players.online}/${players.max}` : '0/0'}</span>
    <span className={`block rounded-b-md text-white ${online ? 'bg-emerald-500' : 'bg-red-500'}`}>{online ? 'Online' : 'Offline'}</span>
   </div>
   <div className='server-item_ip mr-1 mt-1 h-[72px] rounded-md border border-[var(--dark)] text-center text-sm md:text-base'>
    <CopyButton textToCopy={ip} className='h-full'>
     {ip}
    </CopyButton>
   </div>
  </div>
 );
};
