const FormElement = () => {
  return (
    <>
      <form>
        <label className='block'>
          <span className='block text-sm font-medium text-slate-700'>Username</span>
          <input
            type='text'
            value='tbone'
            disabled
            className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
											focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
											disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
											invalid:border-pink-500 invalid:text-pink-600
											focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
          />
        </label>

        <label className='block'>
          <span className='block text-sm font-medium text-slate-700'>Email</span>
          <input
            type='email'
            className='peer px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none'
          />
          <p className='mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>Please provide a valid email address.</p>
        </label>

        <fieldset>
          <legend>Published status</legend>

          <input id='draft' className='peer/draft' type='radio' name='status' checked />
          <label htmlFor='draft' className='peer-checked/draft:text-sky-500'>Draft</label>

          <input id='published' className='peer/published' type='radio' name='status' />
          <label htmlFor='published' className='peer-checked/published:text-sky-500'>Published</label>

          <div className='hidden peer-checked/draft:block'>Drafts are only visible to administrators.</div>
          <div className='hidden peer-checked/published:block'>Your post will be publicly visible on your site.</div>
        </fieldset>
      </form>

      <a
        href='#'
        className='group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500'
      >
        <div className='flex items-center space-x-3'>
          <svg className='h-6 w-6 stroke-sky-500 group-hover:stroke-white' fill='none' viewBox='0 0 24 24'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M11 19H6.931A1.922 1.922 0 015 17.087V8h12.069C18.135 8 19 8.857 19 9.913V11'
            ></path>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M14 7.64L13.042 6c-.36-.616-1.053-1-1.806-1H7.057C5.921 5 5 5.86 5 6.92V11M17 15v4M19 17h-4'
            ></path>
          </svg>
          <h3 className='text-slate-900 group-hover:text-white text-sm font-semibold'>New project</h3>
        </div>
        <p className='text-slate-500 group-hover:text-white text-sm'>Create a new project from a variety of starting templates.</p>
      </a>

      <ul role='list'>
        <li className='group/item hover:bg-slate-100 ...'>
          <img src='{person.imageUrl}' alt='' />
          <div>
            <a href='{person.url}'>Someone name</a>
            <p>Title of the game</p>
          </div>
          <a className='group/edit invisible hover:bg-slate-200 group-hover/item:visible ...' href='tel:{person.phone}'>
            <span className='group-hover/edit:text-gray-700 ...'>Call</span>
            <svg className='group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...'></svg>
          </a>
        </li>
      </ul>
    </>
  );
};

export default FormElement;
