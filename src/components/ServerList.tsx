import Link from 'next/link';
import CopyButton from '@/components/CopyButton';
import type { ServerMetadata, MinecraftServerAPIResponse } from '@/lib/servers';
import { capitalize } from '@/lib/utils';

export const ServerItem = ({ metadata: { name, tags, ip, type }, players, online, version, i }: MinecraftServerAPIResponse & { metadata: ServerMetadata; i: number }) => {
 return (
  <div className='server-item'>
   <h1 className='server-item_name'>
    <Link href={`/server/${i}`}>{name || 'A Minecraft Server'}</Link>
   </h1>
   <div className='server-item_tags'>
    {(tags &&
     tags.map((tag, id) => (
      <span className='server-item_tags_tag' key={id}>
       {tag}
      </span>
     ))) || <span className='server-item_tags_tag'>No tags provided.</span>}
    <Link href={`/type/${type}`} className='server-item_tags_tag'>
     {type}
    </Link>
   </div>

   <div className='server-item_online-players'>
    <p>Players</p>
    <span>{online ? `${players.online}/${players.max}` : '0/0'}</span>
    <span className={`server-item_online-players_status ${online ? 'status-online' : 'status-offline'}`}>{online ? 'Online' : 'Offline'}</span>
   </div>
   <span className='server-item_version'>Version: {(version && capitalize(version.name_clean)) || (online ? 'Not Specified' : 'Not Retrievable')}</span>
   <CopyButton className='server-item_ip' textToCopy={ip}>
    {ip}
   </CopyButton>
  </div>
 );
};

export const ServerListContainer = ({ children }) => <div className='server-list'>{children}</div>;
