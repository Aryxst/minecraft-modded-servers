import ServerTotalCounter from '@/components/ServerTotalCounter';
import { ServerItem, ServerListContainer } from '@/components/ServerList';
import { getAll } from '@/lib/requests';
import '@/styles/modules/ServerList.scss';

export default async function Home() {
 'use server';
 const data = await getAll();
 const players = data.reduce((total, server) => total + (server.data.players?.online || 0), 0);
 const Servers = () => (
  <ServerListContainer>
   {data.map((server, i) => {
    return <ServerItem key={i} id={i} {...Object({ players: server.data.players, online: server.data.online })} metadata={server.metadata} />;
   })}
  </ServerListContainer>
 );
 return (
  <div className='flex min-h-screen flex-col items-center justify-between overflow-clip bg-slate-50 p-8 text-black'>
   <div>
    <div className='pb-8'>
     <h1 className='pb-4 text-center text-2xl font-normal md:text-4xl'>All Servers</h1>
     <ServerTotalCounter players={players} servers={data.length} />
    </div>
    <Servers />
   </div>
  </div>
 );
}
