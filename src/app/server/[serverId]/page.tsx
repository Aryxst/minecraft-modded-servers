import Image from 'next/image';
import Link from 'next/link';
import { VT323 as MCFont } from 'next/font/google';
import { getServerById } from '@/lib/requests';
import { lenght as maxLenght } from '@/lib/servers';
import Main from '@/components/Main';
import CopyButton from '@/components/CopyButton';

const mcfont = MCFont({ subsets: ['latin'], weight: ['400'] });

export default async function Page({ params: { serverId } }) {
 serverId = Number(serverId);
 const {
  metadata: { icon: localIcon, website, ip, name },
  icon,
  motd,
  players,
 } = await getServerById(serverId);
 // => (Total seconds to wait for recache - (Current Time - Last Cache Time) = Time elapsed in seconds) / 60 = Time elapsed in minutes / 60 = in seconds
 return (
  <Main>
   <div className={'flex flex-col flex-wrap text-center'}>
    <Image src={icon || localIcon} height="64" width="64" alt="No Icon" className="self-center" />
    <p>Name: {name}</p>
    <p>Players: {(players && `${players.online}/${players.max}`) || 'None'}</p>
    <CopyButton textToCopy={ip} detail={'Click to copy the address'}>
     IP: {ip}
    </CopyButton>

    <Link href={website || ''} target="_blank" className={'btn sm:self-center ' + ((!website && 'pointer-events-none bg-gray-500') || '')}>
     {website ? 'Website' : 'No website'}
    </Link>
    <p>MOTD:</p>
    <p dangerouslySetInnerHTML={{ __html: (motd && motd.html) || 'No MOTD to display.' }} className={mcfont.className + ' text-2xl'} />
    <div className="inline-flex self-center">
     <Link href={`/server/${serverId - 1}`} className={'btn ' + ((serverId === 0 && 'pointer-events-none bg-gray-500') || '')}>
      {'<'}
     </Link>
     <p className="self-center">Current: {serverId}</p>
     <Link href={`/server/${serverId + 1}`} className={'btn ' + ((serverId >= maxLenght && 'pointer-events-none bg-gray-500') || '')}>
      {'>'}
     </Link>
    </div>
   </div>
  </Main>
 );
}
