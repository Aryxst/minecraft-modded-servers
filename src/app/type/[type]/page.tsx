import { notFound } from 'next/navigation';
import Main from '@/components/Main';
import { ServerItem, ServerListContainer } from '@/components/ServerList';
import ServerTotalCounter from '@/components/ServerTotalCounter';
import { getAll } from '@/lib/requests';
import { typeNames } from '@/lib/servers';
import { nameTrim } from '@/lib/utils';
import '@/styles/modules/ServerList.scss';

export default async function Home({ params: { type } }) {
 type = type.toLowerCase().replace(/\s+/g);
 !typeNames.hasOwnProperty(type) && notFound();
 const data = (await getAll()).filter((meta) => meta.metadata.type === type);
 const players = data.reduce((total, server) => total + (server.data.players?.online || 0), 0);
 return (
  <Main>
   <div>
    <h1 className='servers-h1'>All {nameTrim(data[0].metadata.name)} Servers</h1>
    <ServerListContainer>
     {data.map((server, i) => (
      <ServerItem key={i} metadata={server.metadata} {...server.data} id={server.metadata.id} />
     ))}
    </ServerListContainer>
   </div>
   <ServerTotalCounter players={players} servers={data.length} />
  </Main>
 );
}
