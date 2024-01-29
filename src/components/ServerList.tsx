import Link from 'next/link';
import CopyButton from '@/components/CopyButton';
import type { ServerMetadata, MinecraftServerAPIResponse } from '@/lib/servers';

export const ServerListContainer = ({ children }) => <div className='server-list'>{children}</div>;

export const ServerItem = ({ id, metadata: { name, ip }, players, online }: MinecraftServerAPIResponse & { metadata: ServerMetadata } & { id: number }) => {
 return (
  <div className='server-item'>
   <Link href={`/server/${id}`} prefetch={false} className='server-item_name'>
    <h1>{name}</h1>
   </Link>
   <div className='server-item_online-players'>
    <p>Players</p>
    <span>{online ? `${players.online}/${players.max}` : '0/0'}</span>
    <span className={`server-item_online-players_status ${online ? 'status-online' : 'status-offline'}`}>{online ? 'Online' : 'Offline'}</span>
   </div>
   <div className='server-item_ip'>
    <CopyButton textToCopy={ip}>{ip}</CopyButton>
   </div>
  </div>
 );
};
