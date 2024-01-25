export default function Main(props: { className?: string; children?: any }) {
 return <div className={`flex min-h-screen flex-col items-center justify-between p-8 text-black ${props.className || ''}`}>{props.children}</div>;
}
