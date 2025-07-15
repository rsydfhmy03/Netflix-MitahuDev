import React from 'react';
import SectionLayout from '../../../layout/SectionLayout';
import { DOWNLOAD_COVER_IMAGE, DOWNLOAD_PHONE_IMAGE } from '../../../../constants/listAsset';
import EachUtils from '../../../../utils/eachUtils';
import { LIST_CONTENT_2_EN, LIST_CONTENT_2_ID } from '../../../../constants/listContent';
import { useAtom } from 'jotai';
import { languageAtom } from '../../../../jotai/atoms';

const SectionDwonload = () => {
    const [language] = useAtom(languageAtom);
    const listcontent = language === 'en' ? LIST_CONTENT_2_EN : LIST_CONTENT_2_ID;
  return (
    <SectionLayout>
    <div className='relative max-w-xl mx-auto'>
        <img src={DOWNLOAD_PHONE_IMAGE} alt="COver" className='relative ' />
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 bg-black border border-white flex items-center rounded-xl py-2 px-4 w-[60%] gap-4'>
         <img src={DOWNLOAD_COVER_IMAGE} alt=""  className='max-h-20'/>
            <div className='flex flex-col text-left '>
                <p className='font-bold'>Stranger Things</p>
                <p className='text-blue-500'>Dwonload....</p>
            </div>
        </div>
    </div>
    <div className='flex flex-col text-left'>
        <EachUtils of={listcontent} render={(item, index) => (
            <div key={index} className='mt-10 px-10'>
                <h2 className='text-5xl font-bold '>{item.title}</h2>
                <p className='text-3-xl mt-4'>{item.desc}</p>
            </div>
        )} /></div>
    </SectionLayout> 
  );
};

export default SectionDwonload;