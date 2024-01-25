import Main from '@/components/Main';
import { ServerItem, ServerListContainer } from '@/components/ServerList';
import { getAllByType } from '@/lib/requests';

export default async function Home() {
 const data = await getAllByType();
 return (
  <Main>
   <h1 className='mb-2 text-2xl font-normal md:text-4xl'>All Minecraft Servers</h1>
   <ServerListContainer>
    {data.map((server, i) => (
     <ServerItem key={i} i={i} {...server.data} metadata={server.metadata} />
    ))}
   </ServerListContainer>
  </Main>
 );
}
