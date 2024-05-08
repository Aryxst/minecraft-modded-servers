export default async function Page() {
 return (
  <div className='flex min-h-[calc(100vh-189px)] flex-col items-center justify-between p-8 text-black'>
   <div className='w-full rounded-t-lg border bg-white md:max-w-[700px]'>
    <h1 className='w-full rounded-t-lg bg-[var(--mistgray)] py-2 text-center font-mono text-2xl text-white'>Contact</h1>
    <div className='p-6 font-sans'>
     <form action='/api/sendemail' method='POST' encType='multipart/form-data'>
      <div>
       <label htmlFor='fullname'>Your Full Name</label>
       <br />
       <input type='text' name='fullname' id='fullname' className='mb-2 mt-2 border border-black p-1' minLength={5} required />
      </div>
      <div>
       <label htmlFor='email'>Your email</label>
       <br />
       <input type='email' name='email' id='email' className='mb-2 mt-2 border border-black p-1' minLength={7} required />
      </div>
      <div>
       <label htmlFor='message'>Message</label>
       <br />
       <textarea name='message' id='message' minLength={20} className='mt-4 border border-black p-1' required />
      </div>
      <br />
      <input type='submit' className='w-full rounded-lg bg-[var(--dark)] p-2 text-white' value='Submit' />
     </form>
    </div>
   </div>
  </div>
 );
}
