'use client';
import { useState } from 'react';

interface Props {
 children?: any;
 textToCopy: string;
 afterCopy?: any;
 title?: string;
 className?: string;
}
export default function Copy(props: Props) {
 const [isCopied, setIsCopied] = useState(false);
 const copy = async () => {
  await navigator.clipboard.writeText(props.textToCopy);
  setIsCopied(true);
  setTimeout(() => {
   setIsCopied(false);
  }, 1500);
 };
 return (
  <button disabled={isCopied} onClick={copy} className={props.className} title={props.title}>
   {isCopied && props.afterCopy ? props.afterCopy : props.children}
  </button>
 );
}
