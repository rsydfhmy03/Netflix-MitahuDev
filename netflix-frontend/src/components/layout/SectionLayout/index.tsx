import React from 'react';

const SectionLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <section className='relative bg-black h-[500px] text-white w-full'>
    <div className='grid sm:grid-cols-2 justify-center items-center gap-8 text-center sm:text-left p-8'>
      {children}
    </div>
    <div className='absolute top-0 left-0 w-full bg-stone-900 h-2'></div>
    </section>
  );
};

export default SectionLayout;