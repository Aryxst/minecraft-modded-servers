import { nameTrim } from './utils';

export const servers: Servers = [
 { name: 'The Modded MC Network | ATM8', ip: 'atm8.moddedmc.net', type: 'atm8', website: 'https://moddedmc.net/', discord: 'mmcn', lang: 'en' },
 { name: 'The Modded MC Network | ATM9', ip: 'atm9.moddedmc.net', type: 'atm9', website: 'https://moddedmc.net/', discord: 'mmcn', lang: 'en' },
 { name: 'The Modded MC Network | BetterMC 4', ip: 'bmc4.moddedmc.net', type: 'bettermc4', website: 'https://moddedmc.net/', discord: 'mmcn', lang: 'en' },
 { name: 'The Modded MC Network | BetterMC 1', ip: 'bmc1.moddedmc.net', type: 'bettermc1', website: 'https://moddedmc.net/', discord: 'mmcn', lang: 'en' },
 { name: 'The Modded MC Network | Vault Hunters 3', ip: 'vh3.moddedmc.net', type: 'vaulthunters3', website: 'https://moddedmc.net/', discord: 'mmcn', lang: 'en' },
 { name: 'Valhalla MC | Better Minecraft 1', ip: 'bm.valhallamc.io', type: 'bettermc1', website: 'https://valhallamc.io/', icon: '/icons/valhallamc.png', discord: '8CvAEFWfMC', lang: 'en' },
 { name: 'Valhalla MC | Vault Hunters 3', ip: 'vh.valhallamc.io', type: 'vaulthunters3', website: 'https://valhallamc.io/', icon: '/icons/valhallamc.png', discord: '8CvAEFWfMC', lang: 'en' },
 { name: 'Valhalla MC | Stoneblock 3', ip: 'sb3.valhallamc.io', type: 'stoneblock3', website: 'https://valhallamc.io/', icon: '/icons/valhallamc.png', discord: '8CvAEFWfMC', lang: 'en' },
 { name: 'The Calming Storm | Prominence II', ip: 'p2.calmingstorm.net', type: 'prominence2', website: 'https://www.calmingstorm.net/', discord: 'Q5kJw66Rks', lang: 'en' },
 { name: 'The Calming Storm | ATM9', ip: 'atm9.calmingstorm.net', type: 'atm9', website: 'https://www.calmingstorm.net/', discord: 'Q5kJw66Rks', lang: 'en' },
 { name: 'PumpKraft | Prominence II [FABRIC]', ip: 'pr2.pumpkraft.net', type: 'prominence2fab', lang: 'en' },
 { name: 'Create: Astral Official Server | Create: Astral', ip: '152.67.150.39', type: 'createastral', discord: 'mNeHyuZdqm', lang: 'en' },
 { name: "Meowstard's Community | RAD2", ip: 'rad2.meowstard.cat', type: 'rad2', website: 'https://www.meowstard.cat/', discord: 'MCGC', lang: 'en' },
 { name: 'CDU | RAD2', ip: 'r2.playcdu.co', type: 'rad2', website: 'https://craftdownunder.co/', discord: 'playcdu', lang: 'en' },
 { name: "MineYourMind's Node 1 | ATM9", ip: 'atm9.mineyourmind.net ', type: 'atm9', website: 'https://mineyourmind.net/', discord: 'PuntBYc7', lang: 'en' },
 { name: "MineYourMind's Node 2 | ATM9", ip: 'atm9n2.mineyourmind.net ', type: 'atm9', website: 'https://mineyourmind.net/', discord: 'PuntBYc7', lang: 'en' },
 { name: "MineYourMind's Node 3 | ATM9", ip: 'atm9n3.mineyourmind.net ', type: 'atm9', website: 'https://mineyourmind.net/', discord: 'PuntBYc7', lang: 'en' },
 { name: 'The Modded Warehouse | ATM9', ip: 'atm9.tmw.gg ', type: 'atm9', website: 'https://www.tmw.gg/', discord: 'ModdedWarehouse', lang: 'en' },
 { name: "Meowstard's Community | ATM9", ip: 'atm.meowstard.cat ', website: 'https://meowstard.cat/', type: 'atm9', discord: 'MCGC', lang: 'en' },
 { name: 'Hack The Planet | ATM9', ip: 'atm9.hck.gg', type: 'atm9', discord: 'rDPkmXFv3a', website: 'https://hck.gg/', lang: 'en' },
 { name: 'KappaNetwork | ATM9', ip: 'play.kappanetwork.cc', type: 'atm9', website: 'http://play.kappanetwork.cc/', discord: 'D5cJBq9', lang: 'en' },
 { name: 'S-G Hosting | ATM9', ip: 'atm9.s-g.gg', type: 'atm9', discord: 'TFszf2bUE3', lang: 'en' },
 { name: 'PixelMods SMP | ATM9', ip: 'atm9.cloudlitemc.com', type: 'atm9', discord: 'CRJsM4cRpn', lang: 'en' },
 { name: 'PixelMods SMP | ATM9 No Frills', ip: 'no-frills.cloudlitemc.com', type: 'atm9', discord: 'CRJsM4cRpn', lang: 'en' },
 { name: '[US]CraftersLand | FTB Infinity Evolved [FORGE]', ip: 'inf.craftersland.net', type: 'ftbie', website: 'https://www.craftersland.net', discord: 'HurWCR33', lang: 'en' },
 { name: '[DE]CraftersLand | FTB Infinity Evolved [FORGE]', ip: 'mc.myftb.de', type: 'ftbie', website: 'https://www.craftersland.net', discord: 'HurWCR33', lang: 'en' },
 { name: 'StoneLegion | FTB Infinity Evolved [FORGE]', ip: 'mc.stonelegion.com', type: 'ftbie', website: 'https://stonelegion.com/', discord: 'kBTabCX', lang: 'en' },
 { name: 'CDU | Fantasy MC [FABRIC]', ip: 'fmc.playcdu.co', type: 'ftbie', website: 'https://craftdownunder.co/', discord: 'playcdu', lang: 'en' },
 { name: 'CDU | Enigmatica 9 [FORGE]', ip: 'e9.playcdu.co', type: 'enigm9', website: 'https://craftdownunder.co/', discord: 'playcdu', lang: 'en' },
 { name: '[EU]CDU | ATM9 [FORGE]', ip: 'atm9eu.playcdu.co', type: 'atm9', website: 'https://craftdownunder.co/', discord: 'playcdu', lang: 'en' },
 { name: '[US]CDU | ATM9 [FORGE]', ip: 'atm9mc.playcdu.co', type: 'atm9', website: 'https://craftdownunder.co/', discord: 'playcdu', lang: 'en' },
 { name: '[US]CDU | BCG and the Holy Grail [FABRIC]', ip: 'bcghg.playcdu.co', type: 'atm9', website: 'https://craftdownunder.co/', discord: 'bigchadguys', lang: 'en' },
 { name: '[US1]CDU | BCG and the Holy Grail + [FABRIC]', ip: 'bcg.us.playcdu.co', type: 'bcg', website: 'https://craftdownunder.co/', discord: 'bigchadguys', lang: 'en' },
 { name: '[US2]CDU | BCG and the Holy Grail + [FABRIC]', ip: 'bcg2.us.playcdu.co', type: 'bcg', website: 'https://craftdownunder.co/', discord: 'bigchadguys', lang: 'en' },
 { name: '[EU]CDU | BCG and the Holy Grail + [FABRIC]', ip: 'bcg.eu.playcdu.co', type: 'bcg', website: 'https://craftdownunder.co/', discord: 'bigchadguys', lang: 'en' },
 { name: '[AU]CDU | BCG and the Holy Grail + [FABRIC]', ip: 'bcg.au.playcdu.co', type: 'bcg', website: 'https://craftdownunder.co/', discord: 'bigchadguys', lang: 'en' },
 { name: '[US]CDU | BigChadGuys + (Non-Cobblemon) [FABRIC]', ip: 'bcgnc.playcdu.co', type: 'bcgnc', website: 'https://craftdownunder.co/', discord: 'bigchadguys', lang: 'en' },
 { name: '[US]CDU | Create Arcane Engeenering [FORGE]', ip: 'ae.playcdu.co', type: 'bcgnc', website: 'https://craftdownunder.co/', discord: 'playcdu', lang: 'en' },
 { name: '[US]CDU | DawnCraft [FORGE]', ip: 'dc.playcdu.co', type: 'dawnmc', website: 'https://craftdownunder.co/', discord: 'playcdu', lang: 'en' },
 { name: '[US]CDU | MineColonies: Dimensional Adv [FORGE]', ip: 'mda.playcdu.co', type: 'minecolmda', website: 'https://craftdownunder.co/', discord: 'playcdu', lang: 'en' },
];

export const maxLength = servers.length - 1;
export const typeNames = (() => {
 const obj = {};
 for (let i = 0; i < maxLength; i++) {
  const type = servers[i].type;
  obj.hasOwnProperty(type) ? (obj[type][2] += 1) : (obj[type] = [nameTrim(servers[i].name), type, 1]);
 }
 return obj;
})();
export interface ServerMetadata {
 ip: string;
 name: string;
 type: string;
 description?: string;
 lang?: string;
 website?: string;
 discord?: string;
 icon?: string;
}
export type Servers = ServerMetadata[];

export interface MinecraftServerAPIResponse {
 online: boolean;
 host: string;
 port: number;
 ip_address: string;
 eula_blocked: boolean;
 retrieved_at: number;
 expires_at: number;
 srv_record: null;
 version: Version;
 players: Players;
 motd: MOTD;
 icon: string;
 mods: any[];
 software: null;
 plugins: any[];
}
export interface MOTD {
 raw: string;
 clean: string;
 html: string;
}

export interface Players {
 online: number;
 max: number;
 list: Version[];
}

export interface Version {
 uuid?: string;
 name_raw: string;
 name_clean: string;
 name_html: string;
 protocol?: number;
}
