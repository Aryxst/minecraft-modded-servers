import { notFound } from 'next/navigation';
import { type MinecraftServerAPIResponse, servers } from '@/lib/servers';
export const revalidate = 300;

export async function getAll() {
 try {
  const results = await Promise.all(
   servers.map(async (metadata, i) => {
    const res = await fetch(`${process.env.MCAPI}/${metadata.ip}`, { next: { revalidate } });
    const data: MinecraftServerAPIResponse = await res.json();
    return { data, metadata: { ...metadata, id: i } };
   }),
  );
  return results;
 } catch {
  notFound();
 }
}

export async function getServerById(serverId: number) {
 try {
  const metadata = servers[serverId],
   res = await fetch(`${process.env.MCAPI}/${metadata.ip}`, { next: { revalidate } }),
   data: MinecraftServerAPIResponse = await res.json();
  return { metadata, ...data };
 } catch {
  notFound();
 }
}
