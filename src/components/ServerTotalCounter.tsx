export default function ServerTotalCounter(props: { players: number; servers: number }) {
 return (
  <div className='absolute right-0 top-0 bg-black bg-opacity-10 p-2 font-normal lg:text-lg'>
   <div>
    <span>Current Players: {props.players}</span>
    <br />
    <span>Current Servers: {props.servers}</span>
   </div>
  </div>
 );
}
