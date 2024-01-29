import Main from '@/components/Main';
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
  <Main>
   <div>
    <div>
     <h1 className='mb-2 pb-8 text-center text-2xl font-normal md:text-4xl'>All Servers</h1>
    </div>
    <Servers />
   </div>
   <ServerTotalCounter players={players} servers={data.length} />
  </Main>
 );
}
