import React from 'react';

const SectionLayout = ({children} : {children: React.ReactNode}) => {
  return (
  /**
   * Component for layout section
   * This component is used for layout section, it will create a section with a grid system
   * The grid system is using tailwindcss grid template, with 2 columns in small screen and 1 column in large screen
   * The section will be relative position, so you can use absolute position for the children element
   * @param {{children: React.ReactNode}} props - Props for component, it will receive the children element
   * @returns {JSX.Element} - JSX element for component
   */
    <section className='relative bg-black h-[500px] text-white w-full'>
    <div className='grid sm:grid-cols-2 justify-center items-center gap-8 text-center sm:text-left p-8'>
      {children}
    </div>
    <div className='absolute top-0 left-0 w-full bg-stone-900 h-2'></div>
    </section>
  );
};

export default SectionLayout;