import React from 'react';
import SectionLayout from '../../../layout/SectionLayout';
import EachUtils from '../../../../utils/eachUtils';
import { useAtom } from 'jotai';
import { languageAtom } from '../../../../jotai/atoms';
import { LIST_CONTENT_1_EN, LIST_CONTENT_1_ID } from '../../../../constants/listContent';
import { ENJOY_TV_IMAGE, ENJOY_TV_VIDEO } from '../../../../constants/listAsset';

const ComponentName = () => {
  const [language] = useAtom(languageAtom);
  const listcontent = language === 'en' ? LIST_CONTENT_1_EN : LIST_CONTENT_1_ID;
    return (
    <SectionLayout>
      <EachUtils of={listcontent} render={(item, index) => (
        <div key={index} className='mt-10 px-10'>
          <h2 className='text-5xl font-bold '>{item.title}</h2>
          <p className='text-3-xl mt-4'>{item.desc}</p>
        </div>
      )} />
      <div className="relative max-w-xl mx-auto ">
        <img className='relative z-3' src={ENJOY_TV_IMAGE} alt="TV" />
        <div className='w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          
        <video  src={ENJOY_TV_VIDEO} autoPlay loop muted></video>
        </div>
      </div>
    </SectionLayout>
  )
};

export default ComponentName;