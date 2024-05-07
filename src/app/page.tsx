'use server';
import { ServerItem, ServerListContainer } from '@/components/ServerList';
import { getAll } from '@/lib/requests';
import '@/styles/modules/ServerList.scss';

export default async function Home() {
 const data = await getAll();
 const Servers = () => (
  <ServerListContainer>
   {data.map((server, i) => {
    return <ServerItem key={i} id={i} {...Object({ players: server.data.players, online: server.data.online })} metadata={server.metadata} />;
   })}
  </ServerListContainer>
 );
 return <Servers />;
}
