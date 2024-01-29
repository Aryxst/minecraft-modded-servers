export const nameTrim = (name: string) => name.split('| ')[1] ?? name.split("'s")[1].split('|')[0];
