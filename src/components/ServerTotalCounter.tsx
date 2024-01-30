export default function ServerTotalCounter(props: { players: number; servers: number }) {
 return (
  <div className='bg-black bg-opacity-10 p-2 text-center text-base font-normal lg:text-lg xl:text-xl'>
   <div>
    <span>Current Players: {props.players}</span>
    <br />
    <span>Current Servers: {props.servers}</span>
   </div>
  </div>
 );
}
