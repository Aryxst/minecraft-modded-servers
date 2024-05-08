export const nameTrim = (name: string) => ({ prefix: name.split('|')[0].trimEnd(), modpack: name.split('|')[1].trimEnd() ?? name.split("'s")[1].split('|')[0] });
