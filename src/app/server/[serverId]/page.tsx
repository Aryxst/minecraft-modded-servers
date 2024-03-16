import Link from 'next/link';
import Image from 'next/image';
import { VT323 as MCFont } from 'next/font/google';
import { getServerById } from '@/lib/requests';
import { maxLength } from '@/lib/servers';
import { nameTrim } from '@/lib/utils';
import CopyButton from '@/components/CopyButton';
import IPIcon from '@/images/address.svg';
import PackIcon from '@/images/pack.svg';
import LanguageIcon from '@/images/language.svg';
import StatusIcon from '@/images/status.svg';
import PlayerIcon from '@/images/user.svg';
import WebsiteIcon from '@/images/website.svg';
import ServerImageIcon from '@/images/server-icon.svg';
import MOTDIcon from '@/images/motd.svg';
import NameIcon from '@/images/what.svg';
import VersionIcon from '@/images/version.svg';
import DiscordIcon from '@/images/discord.svg';
import BellIcon from '@/images/bell.svg';
import NoImageIcon from '@/images/no-image.svg';
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
 return (
  <div className='flex min-h-screen flex-col justify-between bg-slate-50 p-8 text-black max-sm:w-screen max-sm:items-center'>
   <div className='w-full max-sm:w-screen'>
    <h1 className='w-full rounded-t-lg bg-[var(--mistgray)] pb-2 pt-2 text-center text-white max-sm:w-screen'>Server Info</h1>
    <table className='w-full bg-white p-4 shadow max-sm:w-screen'>
     <tbody>
      <tr>
       <th>
        <Image src={NameIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Name Icon' />
        Name
       </th>
       <td>{name}</td>
      </tr>
      <tr>
       <th>
        <Image src={IPIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='IP Icon' />
        IP
       </th>
       <td>
        <CopyButton textToCopy={ip}>{ip}</CopyButton>
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
       <td>{`${players?.online || 0} out of ${players?.max || 0}`}</td>
      </tr>
      <tr>
       <th>
        <Image src={VersionIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Version Icon' />
        Version
       </th>
       <td className='text-wrap'>{version?.name_clean || 'Not Retrievable'}</td>
      </tr>
      <tr>
       <th>
        <Image src={PackIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Pack Icon' />
        Type
       </th>
       <td>
        <Link href={`/type/${type}`} className='transition-colors hover:text-blue-500'>
         {nameTrim(name)}
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
        <Link href={website || ''} className='transition-colors hover:text-blue-500'>
         {website || 'None'}
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
   <div className='mt-4 w-full max-sm:w-screen'>
    <h1 className='w-full rounded-t-lg bg-[var(--mistgray)] pb-2 pt-2 text-center text-white max-sm:w-screen'>Server Details</h1>
    <table className='w-full bg-white p-4 shadow max-sm:w-screen'>
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
       <td>{new Date(retrieved_at).toLocaleTimeString()}</td>
      </tr>
      <tr>
       <th>
        <Image src={DiscordIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Discord Icon' />
        Discord
       </th>
       <td>
        <Link href={(discord && `//discord.gg/${discord}`) || ''} prefetch={false} className='transition-colors hover:text-blue-500'>
         {discord ? 'Join Discord' : 'None'}
        </Link>
       </td>
      </tr>
     </tbody>
    </table>
   </div>
   <div className='mt-4 inline-flex self-center'>
    <Link href={`/server/${serverId - 1}`} scroll={false} className={'btn ' + (serverId === 0 && 'pointer-events-none bg-gray-500')}>
     {'<'}
    </Link>
    <p className='self-center'>Current: {serverId}</p>
    <Link href={`/server/${serverId + 1}`} scroll={false} className={'btn ' + (serverId >= maxLength && 'pointer-events-none bg-gray-500')}>
     {'>'}
    </Link>
   </div>
  </div>
 );
}
