import Link from 'next/link';
import Image from 'next/image';
import { VT323 as MCFont } from 'next/font/google';
import { getServerById } from '@/lib/requests';
import { maxLength } from '@/lib/servers';
import { nameTrim } from '@/lib/utils';
import Client from '@/components/Client';
import Copy from '@/components/Copy';
import IPIcon from '@/assets/icons/address.svg';
import PackIcon from '@/assets/icons/pack.svg';
import LanguageIcon from '@/assets/icons/language.svg';
import StatusIcon from '@/assets/icons/status.svg';
import PlayerIcon from '@/assets/icons/user.svg';
import WebsiteIcon from '@/assets/icons/website.svg';
import ServerImageIcon from '@/assets/icons/server-icon.svg';
import MOTDIcon from '@/assets/icons/motd.svg';
import NameIcon from '@/assets/icons/what.svg';
import VersionIcon from '@/assets/icons/version.svg';
import DiscordIcon from '@/assets/icons/discord.svg';
import BellIcon from '@/assets/icons/bell.svg';
import NoImageIcon from '@/assets/icons/no-image.svg';
import '@/styles/modules/ServerSpecs.scss';

const mcfont = MCFont({ subsets: ['latin'], weight: ['400'] });

export default async function Page({ params: { serverId } }) {
 'use server';
 serverId = Number(serverId);
 const {
  metadata: { icon: localIcon, website, ip, name, type, discord },
  icon,
  motd,
  players,
  online,
  version,
  retrieved_at,
 } = await getServerById(serverId);
 const trimmedName = nameTrim(name);
 return (
  <div className='flex min-h-[calc(100vh-189px)] flex-col justify-between p-4 text-black sm:p-8'>
   <div className='w-full max-sm:w-full'>
    <h1 className='w-full rounded-t-lg bg-[var(--mistgray)] pb-2 pt-2 text-center font-mono text-white max-sm:w-full'>Server Info</h1>
    <table className='w-full bg-white p-4 font-sans max-sm:w-full'>
     <tbody>
      <tr>
       <th>
        <Image src={NameIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Name Icon' />
        Name
       </th>
       <td>{trimmedName.prefix}</td>
      </tr>
      <tr>
       <th>
        <Image src={IPIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='IP Icon' />
        IP
       </th>
       <td>
        <Copy textToCopy={ip} afterCopy={'Copied!'}>
         {ip}
        </Copy>
       </td>
      </tr>
      <tr>
       <th>
        <Image src={StatusIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Status Icon' />
        Status
       </th>
       <td>
        <span className={'m-0 rounded-lg p-[3px] text-sm text-white ' + (online ? 'bg-green-500' : 'bg-red-500')}>{online ? 'Online' : 'Offline'}</span>
       </td>
      </tr>
      <tr>
       <th>
        <Image src={PlayerIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Player Icon' />
        Players
       </th>
       <td>{online ? `${players?.online} out of ${players?.max || 0}` : 'N/A'}</td>
      </tr>
      <tr>
       <th>
        <Image src={VersionIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Version Icon' />
        Version
       </th>
       <td className='text-wrap'>{version?.name_clean.replace(/[a-zA-Z,]/g, '') || 'N/A'}</td>
      </tr>
      <tr>
       <th>
        <Image src={PackIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Pack Icon' />
        Type
       </th>
       <td>
        <Link href={`/type/${type}`} className='transition-colors hover:text-blue-500'>
         {trimmedName.modpack}
        </Link>
       </td>
      </tr>
      <tr>
       <th>
        <Image src={LanguageIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Language Icon' />
        Language
       </th>
       <td>English</td>
      </tr>
      <tr>
       <th>
        <Image src={WebsiteIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Website Icon' />
        Website
       </th>
       <td>
        <Link href={website || ''} className={website ? 'transition-colors hover:text-blue-500' : 'pointer-events-none'}>
         {website || 'N/A'}
        </Link>
       </td>
      </tr>
      <tr>
       <th>
        <Image src={MOTDIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='MOTD Icon' />
        MOTD
       </th>
       <td className='bg-black text-white'>
        <p dangerouslySetInnerHTML={{ __html: (motd && motd.html) || 'No MOTD to display' }} className={mcfont.className + ' text-2xl'}></p>
       </td>
      </tr>
      <tr>
       <th>
        <Image src={ServerImageIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Server Image Icon' />
        Icon
       </th>
       <td>
        <Image src={icon || localIcon || NoImageIcon} alt='No Icon' width={64} height={64} />
       </td>
      </tr>
     </tbody>
    </table>
   </div>
   <div className='mt-4 w-full max-sm:w-full'>
    <h1 className='w-full rounded-t-lg bg-[var(--mistgray)] pb-2 pt-2 text-center font-mono text-white max-sm:w-full'>Server Details</h1>
    <table className='w-full bg-white p-4 font-sans max-sm:w-full'>
     <tbody>
      <tr>
       <th>
        <Image src={BellIcon} height={20} width={20} className='mr-1 sm:inline' alt='Bell Icon' />
        Last Ping
       </th>
       <td>{Math.round((Date.now() - retrieved_at) / 1000)} seconds ago</td>
      </tr>
      <tr>
       <th>
        <Image src={BellIcon} height={20} width={20} className='mr-1 sm:inline' alt='Bell Icon' />
        Retrieved At
       </th>
       <td>
        <Client>{new Date(retrieved_at).toLocaleTimeString()}</Client>
       </td>
      </tr>
      <tr>
       <th>
        <Image src={DiscordIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Discord Icon' />
        Discord
       </th>
       <td>
        <Link href={(discord && `https://discord.gg/${discord}`) || ''} prefetch={false} className='transition-colors hover:text-blue-500'>
         {discord ? 'Join Discord' : 'N/A'}
        </Link>
       </td>
      </tr>
     </tbody>
    </table>
   </div>
   <div className='mt-4 inline-flex self-center font-sans'>
    <Link href={`/server/${serverId - 1}`} scroll={false} className={'m-1 rounded-lg bg-[var(--dark)] p-2 text-white ' + (serverId === 0 && 'pointer-events-none bg-gray-500')}>
     {'<'}
    </Link>
    <p className='self-center'>Current: {serverId}</p>
    <Link href={`/server/${serverId + 1}`} scroll={false} className={'m-1 rounded-lg bg-[var(--dark)] p-2 text-white ' + (serverId >= maxLength && 'pointer-events-none bg-gray-500')}>
     {'>'}
    </Link>
   </div>
  </div>
 );
}
