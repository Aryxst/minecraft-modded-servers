'use client';

import { useState } from 'react';

export default function CopyButton(props: { textToCopy: string; className?: string; detail?: string; children?: any }) {
 const [isCopied, setIsCopied] = useState(false);
 const copy = async () => {
  await navigator.clipboard.writeText(props.textToCopy);
  setIsCopied(true);

  setTimeout(() => {
   setIsCopied(false);
  }, 1500);
 };

 return (
  <button disabled={isCopied} onClick={copy} className={props.className || ''} title={props.detail}>
   {isCopied ? 'Copied!' : props.children}
  </button>
 );
}
