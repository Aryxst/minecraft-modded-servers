'use client';
interface Props {
 children: any;
}

export default function Client(props: Props) {
 return <>{props.children}</>;
}
