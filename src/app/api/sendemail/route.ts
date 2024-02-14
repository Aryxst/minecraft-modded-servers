import { format } from 'util';

export const runtime = 'edge';

export async function POST(request: Request) {
 const headers = new Headers();
 headers.append('Host', 'discord.com');
 headers.append('Accept', 'application/json');
 headers.append('Accept-Language', 'en');
 headers.append('Accept-Encoding', 'gzip, deflate, br');
 headers.append('Content-Type', 'application/json');
 headers.append('DNT', '1');
 headers.append('Sec-GPC', '1');
 headers.append('Connection', 'keep-alive');
 headers.append('Sec-Fetch-Dest', 'empty');
 headers.append('Sec-Fetch-Mode', 'cors');
 headers.append('Sec-Fetch-Site', 'cross-site');
 headers.append('host', 'discord.com');
 //
 const formData = await request.formData();
 const fullname = formData.get('fullname');
 const email = formData.get('email');
 const message = formData.get('message');
 const raw = JSON.stringify({
  content: null,
  embeds: [
   {
    description: format('Email: %s\n```%s```', email, message),
    color: '10181046',
    author: {
     name: fullname,
    },
    footer: {
     text: 'Minecraft Modded Servers List - Contact',
     icon_url: 'https://slate.dan.onl/slate.png',
    },
   },
  ],
  attachments: [],
 });
 const res = await fetch(process.env.WEBHOOK_URL, {
  method: 'POST',
  redirect: 'follow',
  headers,
  body: raw,
 });
 if (!res.ok) {
  throw new Error(`HTTP error! status: ${res.status}`);
 }
 return Response.redirect(new URL('/contact', request.url));
}
