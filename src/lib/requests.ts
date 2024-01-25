import { notFound } from 'next/navigation';
import { type MinecraftServerAPIResponse, servers as serverList, ServerMetadata } from '@/lib/servers';
export const revalidate = 300;
/** @param modpack Leave empty to apply ** types => getAll()*/
export async function getAllByType(modpack: string = '') {
 /* DEBUG: console.log('Performing request... - %s', new Date().toLocaleTimeString()); */
 try {
  const servers = modpack ? serverList.filter((meta) => meta.type === modpack.toLowerCase().replace(/\s+/g, '')) : serverList;
  const results = await Promise.all(
   servers.map(async (metadata) => {
    for (let i = 0; i < servers.length; i++) {
     const res = await fetch(`${process.env.MCAPI}/${metadata.ip}`, { next: { revalidate } });
     const data: MinecraftServerAPIResponse = await res.json();
     return { data, metadata };
    }
   }),
  );
  if (servers.length === 0) throw new Error();
  return results;
 } catch {
  console.log('Error 404: Not found');
  notFound();
 }
}

export async function getServerById(serverId: number) {
 console.log('Performing request... - %s', new Date().toLocaleTimeString());
 try {
  let foundServer: any;
  /* DEBUG: console.log(serverList.length); */
  serverList.some((_server, currentIndex) => {
   /* DEBUG: console.log(currentIndex, serverId, currentIndex === serverId); */
   if (currentIndex === serverId) {
    foundServer = serverList[currentIndex];
    return true;
   }
   return false;
  });

  const metadata = foundServer as ServerMetadata,
   res = await fetch(`${process.env.MCAPI}/${metadata.ip}`, { next: { revalidate } }),
   data: MinecraftServerAPIResponse = await res.json();
  return { metadata, ...data };
 } catch {
  console.log('Error 404: Not found');
  notFound();
 }
}
