import { notFound } from 'next/navigation';
import { ServerItem, ServerListContainer } from '@/components/ServerList';
import { getAll } from '@/lib/requests';
import { typeNames } from '@/lib/servers';

export default async function Home({ params: { type } }) {
 type = type.toLowerCase().replace(/\s+/g);
 !typeNames.hasOwnProperty(type) && notFound();
 const data = (await getAll())
  .filter((meta) => meta.metadata.type === type)
  .sort((a, b) => (b.data.players?.online || 0) - (a.data.players?.online || 0))
  .sort((a, b) => (b.data.online ? 1 : -1));
 const Servers = () => (
  <ServerListContainer>
   {data.map((server) => {
    return <ServerItem key={server.metadata.id} id={server.metadata.id} {...Object({ players: server.data.players, online: server.data.online })} metadata={server.metadata} />;
   })}
  </ServerListContainer>
 );
 return <Servers />;
}
