export default async function Page() {
 return (
  <div className='flex min-h-screen flex-col items-center justify-between p-8 text-black'>
   <div className='w-full md:max-w-[700px]'>
    <h1 className='w-full rounded-t-lg bg-[var(--mistgray)] py-2 text-center font-mono text-2xl text-white md:max-w-[700px]'>Legal Notice</h1>
    <div className='prose w-full text-balance border bg-white p-6 font-sans md:max-w-[700px]'>
     <h2>Liability for Contents</h2>
     <p>
      I have carefully drafted the contents of these pages, but I cannot guarantee the accuracy, completeness, and timeliness of the information provided. As a service provider, I am responsible for the content on these pages in accordance with Article 7, paragraph 1, of the Italian Telecommunications Code (Legislative Decree 70/2003) and general laws. However, I am not obligated to monitor or investigate information transmitted or stored by third parties, nor to examine circumstances indicating illegal activity. Obligations to remove or block information under general laws remain unaffected.
      Liability in this context is only possible from the moment knowledge of a concrete violation is acquired. If violations are identified, I will promptly remove the relevant content.
     </p>
     <hr />
     <h2>Liability for Links</h2>
     <p>
      My offering includes links to external websites of third parties over which I have no control. Therefore, I cannot assume any liability for these external contents. The respective provider or operator of such sites is always responsible for the content of the linked sites. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not identified at that time. However, continuous monitoring of the content of linked pages is not reasonable without concrete evidence of a legal violation. If violations are identified, I will immediately remove
      such links.
     </p>
     <hr />
     <h2>Copyright</h2>
     <p>
      The contents and works on these pages created by the site operators are subject to Italian copyright law. Duplication, modification, distribution, and any kind of use beyond the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of these pages are permitted only for private, non-commercial use. Regarding content not created by me on this site, the copyrights of third parties are respected. In particular, third-party content is identified as such. If you become aware of a copyright infringement, please inform me. In case of
      violations, I will promptly remove such contents.
     </p>
    </div>
   </div>
  </div>
 );
}
