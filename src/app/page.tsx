'use server';
import { ServerItem, ServerListContainer } from '@/components/ServerList';
import { getAll } from '@/lib/requests';

export default async function Home() {
 const data = (await getAll()).sort((a, b) => (b.data.players?.online || 0) - (a.data.players?.online || 0)).sort((a, b) => (b.data.online ? 1 : -1));
 const Servers = () => (
  <ServerListContainer>
   {data.map((server) => {
    return <ServerItem key={server.metadata.id} id={server.metadata.id} {...Object({ players: server.data.players, online: server.data.online })} metadata={server.metadata} />;
   })}
  </ServerListContainer>
 );
 return <Servers />;
}
