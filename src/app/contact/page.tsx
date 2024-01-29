import Main from '@/components/Main';

export default async function Page() {
 return (
  <Main>
   <div className='mt-4 rounded-t-lg bg-white shadow'>
    <h1 className='w-full rounded-t-lg bg-[var(--mistgray)] pb-2 pt-2 text-center text-2xl text-white'>Contact</h1>
    <div className='p-8'>
     <form action='/api/sendemail' method='POST' encType='multipart/form-data'>
      <div>
       <label htmlFor='fullname'>Your Full Name</label>
       <br />
       <input type='text' name='fullname' id='fullname' placeholder='...' className='mb-2 mt-2 border border-black p-1' minLength={5} required />
      </div>
      <div>
       <label htmlFor='email'>Your email</label>
       <br />
       <input type='email' name='email' id='email' placeholder='...' className='mb-2 mt-2 border border-black p-1' minLength={7} required />
      </div>
      <div>
       <label htmlFor='message'>Message</label>
       <br />
       <textarea name='message' id='mynameisidk' placeholder='...' minLength={20} className='mt-4 border border-black p-1' required />
      </div>
      <br />
      <input type='submit' className='btn m-0 w-full cursor-pointer bg-[var(--dark)]' value='Submit' />
     </form>
    </div>
   </div>
  </Main>
 );
}
