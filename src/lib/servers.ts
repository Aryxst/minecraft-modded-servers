export const servers: Servers = [
 { name: 'The Modded MC Network | All The Mods 8', ip: 'atm8.moddedmc.net', type: 'allthemods8', website: 'https://moddedmc.net/', tags: ['Magic', 'Quests', 'Extra Large', 'Exploration', 'Tech'] },
 { name: 'The Modded MC Network | All The Mods 9', ip: 'atm9.moddedmc.net', type: 'allthemods9', website: 'https://moddedmc.net/', tags: ['Magic', 'Quests', 'Extra Large', 'Exploration', 'Tech'] },
 { name: 'The Modded MC Network | BetterMC 4', ip: 'bmc4.moddedmc.net', type: 'bettermc4', website: 'https://moddedmc.net/', tags: ['SiFi', 'Tech', 'Quests'] },
 { name: 'The Modded MC Network | BetterMC 1', ip: 'bmc1.moddedmc.net', type: 'bettermc1', website: 'https://moddedmc.net/', tags: ['SiFi', 'Tech', 'Quests'] },
 { name: 'Valhalla MC | Better Minecraft 1', ip: 'bm.valhallamc.io', type: 'bettermc1', website: 'https://valhallamc.io/', tags: ['SiFi', 'Tech', 'Quests', 'Exploration'], icon: '/icons/valhallamc.png' },
 { name: 'The Modded MC Network | Vault Hunters 3', ip: 'vh3.moddedmc.net', type: 'vaulthunters3', website: 'https://moddedmc.net/', tags: ['Quests', 'Adventures', 'Adventures'] },
 { name: 'Valhalla MC | Vault Hunters 3', ip: 'vh.valhallamc.io', type: 'vaulthunters3', website: 'https://valhallamc.io/', tags: ['Quests', 'Adventures', 'Adventures'], icon: '/icons/valhallamc.png' },
 { name: 'Valhalla MC | Stoneblock 3', ip: 'sb3.valhallamc.io', type: 'stoneblock3', website: 'https://valhallamc.io/', tags: ['Tech', 'Magic', 'Quests'], icon: '/icons/valhallamc.png' },
 { name: 'The Calming Storm - Prominence II', ip: 'p2.calmingstorm.net', type: 'prominence2', website: 'https://www.calmingstorm.net/', tags: ['Tech', 'Magic', 'Quests', 'Forge'] },
 { name: 'PumpKraft - Prominence II [FABRIC]', ip: 'pr2.pumpkraft.net', type: 'prominence2' },
 { name: 'Create: Astral | Official Server', ip: '152.67.150.39', type: 'createastral' },
 { name: "Meowstard' Community | RAD 2", ip: 'rad2.meowstard.cat', type: 'rad2' },
 { name: '[AU] Craft Down Under | RAD 2', ip: 'r2.playcdu.co', type: 'rad2' },
];
export const lenght = servers.length - 1;

type Tags = 'Magic' | 'Quests' | 'Extra Large' | 'Exploration' | 'Tech' | 'Adventures' | 'SiFi' | 'Magic' | 'Exploration' | 'Fabric' | 'Forge';

export interface ServerMetadata {
 ip: string;
 name: string;
 type: string;
 description?: string;
 lang?: string;
 website?: string;
 icon?: string;
 tags?: Tags[];
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
