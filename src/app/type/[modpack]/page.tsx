import Main from '@/components/Main';
import { ServerItem, ServerListContainer } from '@/components/ServerList';
import { getAllByType } from '@/lib/requests';

export default async function Home({ params: { modpack } }) {
 const res = await getAllByType(modpack);
 return (
  <Main>
   <ServerListContainer>
    {res.map((server, i) => (
     <ServerItem key={i} metadata={server.metadata} {...server.data} i={i} />
    ))}
   </ServerListContainer>
  </Main>
 );
}
