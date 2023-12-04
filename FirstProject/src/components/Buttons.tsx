import { Fragment } from 'react';
interface IButtons {
  people: { name: string; email: string, imageUrl: string }[];
}
export const Buttons = ({ people }: IButtons) => {
  return (
    <>
      <button className='bg-sky-500 hover:bg-sky-700 dark:md:hover:bg-fuchsia-600 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>
        Save Changes
      </button>

      <ul role='list' className='p-6 divide-y divide-slate-200'>
        {people.map((person, idx) => {
          return (
            <Fragment key={idx}>
              <li className='flex py-4 first:pt-0 last:pb-0'>
                <img className='h-10 w-10 rounded-full' src={person.imageUrl} alt='' />
                <div className='ml-3 overflow-hidden'>
                  <p className='text-sm font-medium text-slate-900'>{person.name}</p>
                  <p className='text-sm text-slate-500 truncate'>{person.email}</p>
                </div>
              </li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
};
