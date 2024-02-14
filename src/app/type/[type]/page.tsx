import { notFound } from 'next/navigation';
import { ServerItem, ServerListContainer } from '@/components/ServerList';
import ServerTotalCounter from '@/components/ServerTotalCounter';
import { getAll } from '@/lib/requests';
import { typeNames } from '@/lib/servers';
import { nameTrim } from '@/lib/utils';

export const runtime = 'edge';

export default async function Home({ params: { type } }) {
 type = type.toLowerCase().replace(/\s+/g);
 !typeNames.hasOwnProperty(type) && notFound();
 const data = (await getAll()).filter((meta) => meta.metadata.type === type);
 const players = data.reduce((total, server) => total + (server.data.players?.online || 0), 0);
 const Servers = () => (
  <ServerListContainer>
   {data.map((server) => {
    return <ServerItem key={server.metadata.id} id={server.metadata.id} {...Object({ players: server.data.players, online: server.data.online })} metadata={server.metadata} />;
   })}
  </ServerListContainer>
 );
 return (
  <div className='flex min-h-screen flex-col items-center justify-between bg-slate-50 p-8 text-black'>
   <div>
    <div className='pb-8'>
     <h1 className='pb-4 text-center text-2xl font-normal md:text-4xl'>All {nameTrim(data[0].metadata.name)} Servers</h1>
     <ServerTotalCounter players={players} servers={data.length} />
    </div>
    <Servers />
   </div>
  </div>
 );
}
