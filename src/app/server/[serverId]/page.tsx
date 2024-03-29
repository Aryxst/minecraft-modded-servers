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

/* THE DATA REFRESHES EVERY 300 SECONDS(5 MIN), this gets info of a specific server */

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

    /* Set the page min height to screen, flex the item in a column and justify their space between. On small screens, the content is full width and centered to the center */
  <div className='flex min-h-screen flex-col justify-between bg-slate-50 p-8 text-black max-sm:w-screen max-sm:items-center'>
    {/*IMPORTANT: SET THE TABLE HEAD TO 30% SCREEN WIDTH, AND TBODY TO 70% SCREEN WIDTH.
        AND FOREACH TH TEXT PUT AN ICON ON ITS LEFT. THE TH HAS AN INLINE DISPLAY.
        THE TABLE ARE WRAPPED ON EACH OTHER. AND ARE SCREEN'S WIDE ON SMALL SCREENS AND HAVE A PADDING ON LARGER SCREENS
     */}
   {/* Set the width to full, and if on small screens, set the width to screen */}
   <div className='w-full max-sm:w-screen'>
    {/* This is the table heading with a Y padding of 8px, a rounded top and with a full screen width on small screens */}
    <h1 className='w-full rounded-t-lg bg-[var(--mistgray)] pb-2 pt-2 text-center text-white max-sm:w-screen'>Server Info</h1>
    <table className='w-full bg-white p-4 shadow max-sm:w-screen'>
     <tbody>
      <tr>
       <th>
        <Image src={NameIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Name Icon' />
        Name
       </th>
       {/* Display the name of the server */}
       <td>{name}</td>
      </tr>
      <tr>
       <th>
        <Image src={IPIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='IP Icon' />
        IP
       </th>
       {/* Display the IP of the server, wrapped in a copy button component that copies the given text */}
       <td>
        <CopyButton textToCopy={ip}>{ip}</CopyButton>
       </td>
      </tr>
      <tr>
       <th>
        <Image src={StatusIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Status Icon' />
        Status
       </th>
       {/* Display the online status of the server, wrapped in a span with a rounded bg color that is green if online and red if offline */}
       <td>
        <span className={'m-0 rounded-lg p-[3px] text-sm text-white ' + (online ? 'bg-green-500' : 'bg-red-500')}>{online ? 'Online' : 'Offline'}</span>
       </td>
      </tr>

      <tr>
       <th>
        <Image src={PlayerIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Player Icon' />
        Players
       </th>
       {/* Display the online and max players of the server */}
       <td>{`${players?.online || 0} out of ${players?.max || 0}`}</td>
      </tr>
      <tr>
       <th>
        <Image src={VersionIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Version Icon' />
        Version
       </th>
       {/* Display the version of the server, or 'Not Retrievable' if it can't be retrieved. EXAMPLE: Forge 1.20.4, Spigot 1.19.4 */}
       <td className='text-wrap'>{version?.name_clean || 'Not Retrievable'}</td>
      </tr>
      <tr>
       <th>
        <Image src={PackIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Pack Icon' />
        Type
       </th>
       {/* Display the type of the server, wrapped in a link to the type page with the name of the type that transitions color on hover. EXAMPLE: Server Type: ftbie */}
       <td>
        <Link href={`/type/${type}`} className='transition-colors hover:text-blue-500'>
            {/* Trim the name of the server. EXAMPLE: CRAFTCOMMUNITY | BetterMC1 => BetterMC1  */}
         {nameTrim(name)}
        </Link>
       </td>
      </tr>
      <tr>
       <th>
        <Image src={LanguageIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Language Icon' />
        Language
       </th>
       {/* Display the language of the server */}
       <td>English</td>
      </tr>
      <tr>
       <th>
        <Image src={WebsiteIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Website Icon' />
        Website
       </th>
       {/* Display a linktto the server's website that transitions color on hover, or 'None' if it doesn't have a website */}
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
       {/* Display the MOTD of the server, or 'No MOTD to display' if it doesn't have a MOTD. Uses the minecraft font and has a 2x extra large size */}
       <td className='bg-black text-white'>
        <p dangerouslySetInnerHTML={{ __html: (motd && motd.html) || 'No MOTD to display' }} className={mcfont.className + ' text-2xl'}></p>
       </td>
      </tr>
      <tr>
       <th>
        <Image src={ServerImageIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Server Image Icon' />
        Icon
       </th>
       {/* Display the icon of the server, or 'No Icon' if it doesn't have an icon */}
       {/* If the server has an icon, display it(base64 retrieved from api), else display the local icon, else display the no image icon */}
       <td>
        <Image src={icon || localIcon || NoImageIcon} alt='No Icon' width={64} height={64} />
       </td>
      </tr>
     </tbody>
    </table>
   </div>
   <div className='mt-4 w-full max-sm:w-screen'>
    {/* This is the table heading with a Y padding of 8px, a rounded top and with a full screen width on small screens */}
    <h1 className='w-full rounded-t-lg bg-[var(--mistgray)] pb-2 pt-2 text-center text-white max-sm:w-screen'>Server Details</h1>
    <table className='w-full bg-white p-4 shadow max-sm:w-screen'>
     <tbody>
      <tr>
       <th>
        <Image src={BellIcon} height={20} width={20} className='mr-1 sm:inline' alt='Bell Icon' />
        Last Ping
       </th>
       {/* Display the time elapsed since the server was last pinged in seconds */}
       <td>{Math.round((Date.now() - retrieved_at) / 1000)} seconds ago</td>
      </tr>
      <tr>
       <th>
        <Image src={BellIcon} height={20} width={20} className='mr-1 sm:inline' alt='Bell Icon' />
        Retrieved At
       </th>
       {/* Display the time at which the server was retrieved */}
       <td>{new Date(retrieved_at).toLocaleTimeString()}</td>
      </tr>
      <tr>
       <th>
        <Image src={DiscordIcon} height={20} width={20} className='mr-1.5 sm:inline' alt='Discord Icon' />
        Discord
       </th>
       {/* Display a link to the server's discord server that transitions color on hover, or 'None' if it doesn't have a discord server */}
       <td>
        <Link href={(discord && `//discord.gg/${discord}`) || ''} prefetch={false} className='transition-colors hover:text-blue-500'>
         {discord ? 'Join Discord' : 'None'}
        </Link>
       </td>
      </tr>
     </tbody>
    </table>
   </div>
   {/* This is the pagination buttons, with an inline-flex display with centering on theirselves. */}
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
